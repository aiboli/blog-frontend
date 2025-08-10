import AppLayout from "../../components/AppLayout";
import styles from "../../styles/Works.module.css";

const projects = [
  {
    name: "Portfolio Site",
    url: "https://yourportfolio.com",
    description: "Personal portfolio showcasing my skills and projects.",
  },
  {
    name: "Blog Platform",
    url: "https://yourblog.com",
    description: "A modern blog platform built with Next.js.",
  },
  // Add more projects as needed
];

export default function Works() {
  return (
    <AppLayout>
      <div className={styles.container}>
        <div className={styles.title}>My Works</div>
        <div style={{ marginBottom: "2rem" }}>
          {/* Prompt Window Example */}
          <PromptWindow title={"Yolofootball"} url="https://yolofootball.com">
            <div>
              <p>
                A decentralized web platform I developed that empowers users to
                create and host their own football spreads and odds. Other users
                can join in to place bets directly, eliminating the need for a
                central bookmaker. This open, peer-to-peer structure allows
                anyone to become a host, fostering a more transparent and
                community-driven sports betting experience
              </p>
            </div>
          </PromptWindow>
          <PromptWindow
            title={"Microsoft Store"}
            url="https://www.microsoft.com/en-us/store/cart"
          >
            <div>
              <p>Yes, it is the one that under the microsoft.com</p>
            </div>
          </PromptWindow>
          <PromptWindow
            title={"BetaTrade"}
            url="https://heliospartnership.com/case-studies/beta-trade"
          >
            <div>
              <p>
                BetaTrade introduces a Zero-Code Trader program featuring a
                Rapid Backtest Engine designed to expedite algorithmic trading
                across diverse asset classes such as equities, cryptocurrencies,
                and forex. This platform enables users to develop and implement
                trading strategies without requiring coding.
              </p>
            </div>
          </PromptWindow>
        </div>
      </div>
    </AppLayout>
  );
}
import PromptWindow from "../../components/PromptWindow";
