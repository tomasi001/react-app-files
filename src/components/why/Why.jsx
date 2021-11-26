import "./why.css";

const Why = () => {
  return (
    <div className="a">
      <div className="a-left">
        <div className="a-card bg"></div>
        <div className="a-card">
          <img
            src="data:image/png;base64,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"
            alt=""
            className="a-img"
          />
        </div>
      </div>
      <div className="a-right">
        <h1 className="a-title">Why Sovtech</h1>
        <p className="a-desc">
          The idea of being able to solve problems by building custom software
          is incredible. One can think of a problem, find a solution , and use
          deployable software to make sure it reaches those who need it. If you
          went back just over 100 years and told people about that concept they
          would have called you crazy. We live in an expansive digital time and
          being able to weild one of the most powerful tools available to man
          would be an honor.
        </p>
        <p className="a-desc">
          I was told about SovTech and the 2022 Graduate Program by one of the
          career consultants at Hyperion Dev. After researching the company I
          quickly came to appreciate the comapny culture. Tech Enthusiasts with
          a love of custom software and scrum methodologies to achieve rapid,
          functional development. Doesn't that get you excited?! To me, the fact
          that SovTech focuses on both Start Up and Corporate software
          development means it is a company interested in tackling both mammoth
          software problems as well as supporting those with the desire to grow
          and innovate.
        </p>
        <p className="a-desc">
          I love the fact that Sovtech is actively seeking individuals who
          aren't afraid to jump into the task at hand while working in a social
          and learning environment. The Sovtech Spex create a wholesome company
          culture, which I believe ultimately leads to a successful company
          culture.
        </p>
      </div>
    </div>
  );
};

export default Why;
