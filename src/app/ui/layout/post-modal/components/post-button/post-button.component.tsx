import { publish } from "@/app/(site)/home/service/publish.service";
import PrimaryButton from "@/app/ui/components/button/primary-button.component";
import { PostButtonProps } from "./post-button.types";

const PostButton = ({ textContent, iconContent, text, isLoading, handleIsLoading, handleSubmitPost, handleShowError }: PostButtonProps) => {
    const handleSubmit = async () => {
        try {
            handleIsLoading(true);
            await publish(text);
            handleIsLoading(false);
            return handleSubmitPost();
        } catch { 
            return handleShowError();
        }
    };
    const isButtonDisabled = text.length <= 0 ? true : false;
    return (
        <PrimaryButton
            buttonContent={isLoading ? iconContent : textContent}
            handleOnClick={handleSubmit}
            isDisabled={isButtonDisabled}
            buttonType="primary"
            borderRadius="rounded-full"
        />
    );
};

export default PostButton;