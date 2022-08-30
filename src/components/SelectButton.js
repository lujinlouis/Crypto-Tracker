import React from 'react'

const SelectButton = ({ children, selected, onClick }) => {
    return (
        <span
            className="select-button"
            style={{
                border: "1px solid gold",
                borderRadius: 5,
                padding: 10,
                paddingLeft: 20,
                paddingRight: 20,
                fontFamily: "Montserrat",
                cursor: "pointer",
                backgroundColor: selected ? "gold" : "",
                color: selected ? "black" : "",
                fontWeight: selected ? 700 : 500,
            }}
            onClick={onClick}
        >
            {children}
        </span>
    )
}

export default SelectButton
