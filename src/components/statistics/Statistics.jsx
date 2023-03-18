import clsx from "clsx";
import cssStatist from "../statistics/Statistics.module.css";

export const Statistics = ({ statistics }) => {
  return (
    <section className={cssStatist.statistic}>
      <ul className={cssStatist["stats-list"]}>
        {statistics.map((item, index) => (
          <li
            key={item.id}
            className={clsx(cssStatist.item, {
              [cssStatist["item--special"]]: index % 5 === 0,
            })}
          >
            <span className={cssStatist.label}>{item.label}</span>
            <span className={cssStatist.percentage}>{item.percentage}%</span>
          </li>
        ))}
      </ul>
    </section>
  );
};
