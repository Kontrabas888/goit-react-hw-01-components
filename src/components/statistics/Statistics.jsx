import PropTypes from 'prop-types';
import clsx from "clsx";
import cssStatist from "../statistics/Statistics.module.css";

export const Statistics = ({ statistics, title }) => {
  return (
    <section className={cssStatist.statistic}>
      {title && <h2 className={cssStatist.title}>{title}</h2>}

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

Statistics.propTypes = {
  statistics: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ).isRequired,
  title: PropTypes.string,
};
