export const LoadState = () => {

    try {

        const getState = localStorage.getItem("state")

        if (getState === null) {

            return undefined
        }
        return JSON.parse(getState)

    } catch (err) {

        return undefined
    }





}


export const SaveState = (state) => {

    try {

        const convertedState = JSON.stringify(state)
        localStorage.setItem("state", convertedState)

    } catch (err) {


        console.log("failed to save state", err)

    }



}