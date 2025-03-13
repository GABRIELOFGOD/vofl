"use client";

import { City, Country, ICity, IState, State } from "country-state-city";
import { useEffect, useState } from "react"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Label } from "@/components/ui/label";

const StateLocalGovt = () => {
  
  const states: IState[] = State.getStatesOfCountry("NG");
  const [stateChoice, setStateChoice] = useState<IState>(State.getStateByCodeAndCountry("KW", "NG")!);

  const [localGovts, setLocalGovts] = useState<ICity[] | null>(City.getCitiesOfState("NG", "KW"))

  useEffect(() => {
    const cities = City.getCitiesOfState("NG", stateChoice.isoCode);
    setLocalGovts(cities);
    console.log(
      // "cities", cities,
      "stateChoice", stateChoice,
      // "localGovts", localGovts
    )
  }, [stateChoice]);
  
  return (
    <div className="flex flex-col gap-5 md:flex-row">
      <div className="grid w-full items-center gap-1.5">
        <Label htmlFor="email">State</Label>
        <Select
          value={stateChoice.isoCode}
          onValueChange={(value) => setStateChoice(State.getStateByCodeAndCountry(value, "NG")!)}
        >
          <SelectTrigger className="w-full">
            <SelectValue placeholder="Select state" />
          </SelectTrigger>
          <SelectContent>
            {states.map((state) => (
              <SelectItem
                key={state.isoCode}
                value={state.isoCode}
              >
                {state.name}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>
      <div className="grid w-full items-center gap-1.5">
        <Label htmlFor="dob">Local Government</Label>
        <Select
          value={localGovts?.[0]?.name}
          onValueChange={(value) => console.log(value)}
        >
          <SelectTrigger className="w-full">
            <SelectValue placeholder="Local Government Area" />
          </SelectTrigger>
          <SelectContent>
            {localGovts?.map((localGovt) => (
              <SelectItem
                key={localGovt.name}
                value={localGovt.name}
              >
                {localGovt.name}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>
    </div>
  )
}
export default StateLocalGovt