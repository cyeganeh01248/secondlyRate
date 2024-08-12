import { createSignal } from "solid-js";
import "./App.css";

const money_formatter = new Intl.NumberFormat("en-us", {
    style: "currency",
    currency: "USD",
});

function App() {
    return (
        <div class="container">
            <Timer />
        </div>
    );
}

function Timer() {
    let start = new Date();
    let [dollarsMade, setDollarsMade] = createSignal(0);
    let [secondsElapsed, setSecondsElapsed] = createSignal(0);
    let [salary, setSalary] = createSignal(100000);
    let hourlyRate = () => salary() / 52 / parseInt("0" + 40);
    let secondlyRate = () => hourlyRate() / 60 / 60;

    setInterval(() => {
        setDollarsMade((d) => d + secondlyRate());
        setSecondsElapsed((s) => s + 1);
    }, 1000);
    return (
        <>
            <h2>
                Start Time:
                <input value={start.toLocaleString()} disabled={true} />
            </h2>
            <h2>
                Seconds elapsed:
                <input value={secondsElapsed() + " seconds"} disabled={true} />
            </h2>
            <h2>
                Dollars Made:
                <input
                    value={money_formatter.format(dollarsMade())}
                    disabled={true}
                />
                <button onClick={() => setDollarsMade(0)}>Reset</button>
            </h2>
            <h2>
                Secondly Rate:
                <input
                    value={
                        money_formatter.format(secondlyRate()) + " per second"
                    }
                    disabled={true}
                />
            </h2>
            <h2>
                Hourly Rate:
                <input
                    value={money_formatter.format(hourlyRate()) + " per hour"}
                    disabled={true}
                />
            </h2>
            <h2>
                Yearly Rate:
                <input
                    value={money_formatter.format(salary()) + " per year"}
                    disabled={true}
                />
            </h2>
            <div class="container">
                <h1>Settings</h1>
                <h2>Salary</h2>
                <input
                    value={salary()}
                    onKeyUp={(e) =>
                        setSalary(
                            parseFloat((e.target as HTMLInputElement).value),
                        )
                    }
                />
            </div>
        </>
    );
}

export default App;
