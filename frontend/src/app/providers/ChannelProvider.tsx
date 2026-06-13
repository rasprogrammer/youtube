import { useMyChannel } from "../../features/channel/hooks/useMyChannel";
import { useAuthStore } from "../store/auth.store";


export default function ChannelProvider () {

    useMyChannel();

    
    return null; 
}