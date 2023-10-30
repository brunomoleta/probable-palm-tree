import {DetailsItem} from "./DetailsItem";
import {database} from "../database/database";


export const Details = () => {

    const newList = database.map((item, index) => ({...item, id: index}));

    return (
        <>
            {newList.map((item) => (
                <DetailsItem
                    key={item.id}
                    id={item.id}
                    summary={item.summary}
                    paragraph={item.paragraph}
                />
            ))}
        </>
    );
};
