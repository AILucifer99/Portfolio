import { useEffect, useRef, useState } from "react";
import { retrievalDemo } from "../data/content.js";
import "./RetrievalDemo.css";

const PHASE_TYPING = "typing";
const PHASE_RETRIEVING = "retrieving";
const PHASE_ANSWERING = "answering";
const PHASE_HOLD = "hold";

const TYPE_MS = 34;
const RETRIEVE_MS = 700;
const HOLD_MS = 2600;

export default function RetrievalDemo() {
  const [index, setIndex] = useState(0);
  const [typed, setTyped] = useState("");
  const [phase, setPhase] = useState(PHASE_TYPING);
  const reduceMotion = useRef(false);

  useEffect(() => {
    reduceMotion.current = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  }, []);

  const item = retrievalDemo[index];

  useEffect(() => {
    let timer;

    if (reduceMotion.current) {
      setTyped(item.query);
      setPhase(PHASE_ANSWERING);
      timer = setTimeout(() => advance(), HOLD_MS * 1.5);
      return () => clearTimeout(timer);
    }

    if (phase === PHASE_TYPING) {
      if (typed.length < item.query.length) {
        timer = setTimeout(() => setTyped(item.query.slice(0, typed.length + 1)), TYPE_MS);
      } else {
        timer = setTimeout(() => setPhase(PHASE_RETRIEVING), 300);
      }
    } else if (phase === PHASE_RETRIEVING) {
      timer = setTimeout(() => setPhase(PHASE_ANSWERING), RETRIEVE_MS);
    } else if (phase === PHASE_ANSWERING) {
      timer = setTimeout(() => setPhase(PHASE_HOLD), 250);
    } else if (phase === PHASE_HOLD) {
      timer = setTimeout(() => advance(), HOLD_MS);
    }

    return () => clearTimeout(timer);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [phase, typed, index]);

  function advance(toIndex) {
    setTyped("");
    setPhase(PHASE_TYPING);
    setIndex((prev) => (toIndex !== undefined ? toIndex : (prev + 1) % retrievalDemo.length));
  }

  function goTo(i) {
    advance(i);
  }

  const showAnswer = phase === PHASE_ANSWERING || phase === PHASE_HOLD || reduceMotion.current;
  const showRetrieving = phase === PHASE_RETRIEVING;

  return (
    <div className="retrieval" role="group" aria-label="Interactive demo: ask about Snehan">
      <div className="retrieval__bar">
        <div className="retrieval__dots">
          <span /><span /><span />
        </div>
        <span className="retrieval__title">ask-the-portfolio.py</span>
      </div>

      <div className="retrieval__body">
        <p className="retrieval__line">
          <span className="retrieval__prompt">query&gt;</span>
          <span className="retrieval__query">{typed}</span>
          <span className="retrieval__caret" aria-hidden="true" />
        </p>

        {showRetrieving && (
          <p className="retrieval__status">
            <span className="retrieval__spinner" aria-hidden="true" />
            retrieving from knowledge base…
          </p>
        )}

        <div className={`retrieval__answer ${showAnswer ? "is-visible" : ""}`} aria-live="polite">
          {showAnswer && (
            <>
              <span className="chip retrieval__source">{item.source}</span>
              <p className="retrieval__text">{item.answer}</p>
            </>
          )}
        </div>
      </div>

      <div className="retrieval__nav">
        {retrievalDemo.map((q, i) => (
          <button
            key={q.query}
            className={`retrieval__navdot ${i === index ? "is-active" : ""}`}
            aria-label={`Show: ${q.query}`}
            onClick={() => goTo(i)}
          />
        ))}
      </div>
    </div>
  );
}
