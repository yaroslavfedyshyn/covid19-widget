import React, {useCallback, useMemo, useState} from "react";
import { DateRangePicker } from 'react-date-range';
import { Paper } from "@material-ui/core";
import 'react-date-range/dist/styles.css';
import 'react-date-range/dist/theme/default.css';

interface Props {
    onChange: Function,
    startDate: Date,
    endDate: Date,
}

export default (props: Props) => {
    const { onChange, startDate, endDate } = props;

    const handleSelect = useCallback((ranges: any) => {
        // {
        //   selection: {
        //     startDate: [native Date Object],
        //     endDate: [native Date Object],
        //   }
        // }
        onChange(ranges.selection)
    }, [onChange])

    const selectionRange = useMemo(() => ({
        startDate,
        endDate,
        key: 'selection',
    }), [startDate, endDate])

    return (
        <Paper>
            <DateRangePicker ranges={[selectionRange]} onChange={handleSelect} />
        </Paper>
    );
}
