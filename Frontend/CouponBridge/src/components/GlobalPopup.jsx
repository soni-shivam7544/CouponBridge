
import { usePopup } from '../hooks/usePopup.js';
import LoaderPopup from './loaderPopup.jsx';
import DeleteConfirmPopup from './DeleteConfirmPopup.jsx';

function GlobalPopup() {
    const { popup, hidePopup } = usePopup();

    if (!popup) return null;

    const handleResolve = (response) => {
        popup.resolve(response);
        hidePopup();
    }

    
    switch(popup.type){
        case "Loader":
            return <LoaderPopup/>
        
        case "Delete-Confirm":
            return (<DeleteConfirmPopup
                onConfirm = {() => handleResolve(true)}
                onCancel = {() => handleResolve(false)}
            />);
        
        default:
            return null;
    }
}

export default GlobalPopup;