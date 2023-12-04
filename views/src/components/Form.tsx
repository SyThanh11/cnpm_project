import FormInputs from './FormInputs'
import useFormContext from "../hooks/useFormContext"

const Form = () => {
    const {
        page,
        setPage,
        data,
        title,
        canSubmit,
        disablePrev,
        disableNext,
        prevHide,
        nextHide,
        submitHide
    } = useFormContext()

    const handlePrev = () => setPage(prev => prev - 1)

    const handleNext = () => setPage(prev => prev + 1)

    const handleSubmit = e => {
        e.preventDefault()
        console.log(JSON.stringify(data))
    }


    const content = (
        <form className="" onSubmit={handleSubmit}>
            <div className="button-container">
            <button type="button" className={disablePrev ? `button ${prevHide} bg-[#009EE2] text-white border-2 border-[#009EE2] transition-all font-bold py-6 px-34 rounded-[10px] opacity-50 cursor-not-allowed` : `button ${prevHide} bg-[#009EE2] text-white border-2 border-[#009EE2] hover:border-[#2e6780] hover:bg-[#2e6780] hover:text-white transition-all font-bold py-6 px-34 rounded-[10px]`} onClick={handlePrev} disabled={disablePrev}>Quay lại</button>

            <button type="button" className={disableNext ? `button ${nextHide} bg-[#009EE2] text-white border-2 border-[#009EE2] transition-all font-bold py-6 px-34 rounded-[10px] opacity-50 cursor-not-allowed` : `button ${nextHide} bg-[#009EE2] text-white border-2 border-[#009EE2] hover:border-[#2e6780] hover:bg-[#2e6780] hover:text-white transition-all font-bold py-6 px-34 rounded-[10px]`} onClick={handleNext} disabled={disableNext}>Tiếp theo</button>

            {/* <button type="submit" className={`button ${submitHide} bg-[#009EE2] text-white border-2 border-[#009EE2] hover:border-[#2e6780] hover:bg-[#2e6780] hover:text-white transition-all font-bold py-6 px-34 rounded-[10px]`} disabled={!canSubmit}>Submit</button> */}
            </div>
            <FormInputs />

        </form>
    )

    return content
}
export default Form