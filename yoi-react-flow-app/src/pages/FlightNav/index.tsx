import React from "react";
import styles from "./index.less";

const options: any[] = [
  {
      name: '1#-6#炉',
      value: 'page1'
  },
  {
      name: '7#-12#炉',
      value: 'page2'
  },
  {
      name: '13#-18#炉',
      value: 'page3'
  },
  {
      name: '19#-23#炉',
      value: 'page4'
  }
]

export default function FlightNav(props: any) {
  const { checked, setChecked } = props;

  return (
    <nav className={styles.flightNav}>
      <ul>
        {options.map((item: any) => (
          <li
            className={item.value === checked ? styles.navChecked : undefined}
            onClick={() => setChecked(item.value)}
            key={item.value}
          >
            {item.name}
          </li>
        ))}
      </ul>
    </nav>
  );
}
