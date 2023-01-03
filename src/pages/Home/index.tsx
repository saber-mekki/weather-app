import React, { useState, useMemo } from "react";
import Select from "react-select";
import countryList from "react-select-country-list";
import Card from "react-bootstrap/Card";
import moment from "moment";

import "./index.css"

export function Home() {
	const [value, setValue] = useState<any>("");
	const [countryName, setCountryName] = useState<string>("");
	const [data, setData] = useState<any>();

	const options = useMemo(() => countryList().getData(), []);

	const changeHandler = (value: any) => {
		setValue(value);
		setCountryName(value.label);
	};

	React.useEffect(() => {
		const fetchData = async () => {
			await fetch(
				`https://api.openweathermap.org/data/2.5/weather/?q=${countryName}&units=metric&APPID=f825344b0cf0672c689378549f9868db`
			)
				.then((res) => res.json())
				.then((result) => {
					setData(result);
				});
		};
		fetchData();
	}, [countryName]);

	return (
		<React.Fragment>
			<Select options={options} value={value} onChange={changeHandler} />
			<Card className="card__clz">
				{countryName === "" ? (
					<Card.Body>
						<h3 style={{ color: "white" }}>select a country</h3>
					</Card.Body>
				) : (
					<Card.Body>
						<Card.Title >
								<p className="time__clz">
									{moment().format("dddd")},{" "}
									<span>{moment().format("LL")}</span>
								</p>
						</Card.Title>
						<Card.Subtitle className="mb-2 text-muted">
							<div >
								<p className="main__clz">
									{data.weather && data.weather[0].main}
								</p>
							</div>
						</Card.Subtitle>
						<div className="temp__clz">
							<span className="temp-hum pl-4">
								temp: {data.main && data.main.temp} &deg;C
							</span>
							<p className="temp-hum">
								Humidity: {data.main && data.main.humidity} %
							</p>
						</div>
					</Card.Body>
				)}
			</Card>
		</React.Fragment>
	);
}
