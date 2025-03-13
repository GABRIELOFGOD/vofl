import DocumentUpload from "./_components/DocumentUpload"
import PersonalInformationForm from "./_components/PersonalInformationForm"

const Apply = () => {
  return (
    <div className="w-full justify-center items-center flex flex-col gap-10 py-10 px-3">
      <div className="w-full justify-center items-center flex flex-col gap-10 md:w-[750px]">
        <div className="flex flex-col gap-2 w-full">
          <p className="text-start text-primary font-bold text-4xl">Application</p>
          <p className="text-secondary-foreground">Fill in all the Information appropriately.</p>
        </div>
        <PersonalInformationForm />
        <DocumentUpload />
      </div>
    </div>
  )
}
export default Apply