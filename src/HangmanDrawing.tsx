import styled from "styled-components"
const HEAD = (
    <div
    style={{
        width: "50px",
        height: "50px",
        borderRadius: "100%",
        border: "10px solid #620202",
        position: "absolute",
        top: "50px",
        right: "-30px",
    }}
    />
    )

    const BODY = (
        <div
        style={{
            width: "10px",
            height: "100px",
            background: "#620202",
            position: "absolute",
            top: "120px",
            right: 0,
        }}
        />
        )

        
    const RIGHT_ARM = (
        <div
        style={{
            width: "100px",
            height: "10px",
            background: "#620202",
            position: "absolute",
            top: "150px",
            right: "-100px",
            rotate: "-30deg",
            transformOrigin: "left bottom",
        }}
        />
        )

        const LEFT_ARM = (
            <div
            style={{
                width: "100px",
                height: "10px",
                background: "#620202",
                position: "absolute",
                top: "150px",
                right: "10px",
                rotate: "30deg",
                transformOrigin: "right bottom",
            }}
            />
            )

            const RIGHT_LEG = (
                <div
                style={{
                    width: "100px",
                    height: "10px",
                    background: "#620202",
                    position: "absolute",
                    top: "210px",
                    right: "-90px",
                    rotate: "60deg",
                    transformOrigin: "left bottom",
                }}
                />
            )
            
            const LEFT_LEG = (
                <div
                    style={{
                    width: "100px",
                    height: "10px",
                    background: "#620202",
                    position: "absolute",
                    top: "210px",
                    right: 0,
                    rotate: "-60deg",
                    transformOrigin: "right bottom",
                    }}
                />
            )

            //--This is an Array that will have all of our body parts NOTE: put them in order----//
            const BODY_PARTS = [HEAD, BODY, RIGHT_ARM, LEFT_ARM, RIGHT_LEG, LEFT_LEG]
            type HangmanDrawingProps = {
                numberOfGuess: number
            }

            //--This {numberOfGuess}: HangmanDrawingProps is Ts
export function HangmanDrawing({numberOfGuess}: HangmanDrawingProps) {
    return (
    <WrapperD>
        {/* We want to start at 0 then to the number of guesses */}
        {BODY_PARTS.slice(0, numberOfGuess)}
        <DropDownBarDiv/>
        <TopBarDiv/>
        <TallBarDiv/>
        <BottomBarDiv/>
    </WrapperD>
    )
}

const WrapperD = styled.div`
    position: relative;
`

const BottomBarDiv = styled.div`
    height: 10px;
    width: 250px;
    background: #620202;
`

const TallBarDiv = styled.div`
    height: 400px;
    width: 10px;
    background: #620202;
    margin-left: 120px;
`

const TopBarDiv = styled.div`
    height: 10px;
    width: 200px;
    background: #620202;
    margin-left: 120px;
`
const DropDownBarDiv = styled.div`
    height: 50px;
    width: 10px;
    background: #620202;
    position: absolute;
    top: 0;
    right: 0;
`