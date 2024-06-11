import React, { useEffect, useState } from "react";
import { THIRTY_SECONDS_IN_MILLISECONDS } from "../../../constans/constans";
import { CustomLineChart } from "../custom-line-chart.component";
import { useAtom } from "jotai";
import { cornDataAtom } from "../../../pages/HomePage/home.page";

export const UChart = ({ fetchAddress }) => {
    const [cornData, setCornData] = useAtom(cornDataAtom);

    return (
             cornData &&
                <CustomLineChart
                    id="main"
                    width="100%"
                    data={cornData.data}
                    xAxisDataKey="index"
                    firstLineDataKey="u"
                    secondLineDataKey="uDane"
                    title="U Data"
                />

    );
};
