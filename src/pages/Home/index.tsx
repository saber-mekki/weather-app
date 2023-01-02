import React, { useState, useMemo } from "react";
import Select from "react-select";
import countryList from "react-select-country-list";

export function Home() {
    const [value, setValue] = useState<string>("");
    const options = useMemo(() => countryList().getData(), []);

        const changeHandler = (value:any) => {
					setValue(value);
				};

	return (
		   <Select options={options} value={value} onChange={changeHandler} />
    )
}
