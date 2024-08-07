import React from "react";
import Cards from "./Cards"


const CardLists = ({ robots }) => {
    return (
        <div>
            {robots.map((user, i) => {
                return (
                    <Cards
                        key={i}
                        id={robots[i].id}
                        name={robots[i].name}
                        email={robots[i].email}
                    />
                );
            }
            )
            }
        </div>
    );
}

export default CardLists