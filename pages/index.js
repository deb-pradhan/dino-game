import { useMoralis } from "react-moralis"
import Login from "../components/Login"
import Game from "../components/Game";

export default function Home() {

  const{isAuthenticated} = useMoralis();
  
  return (
    <div >
      {
        isAuthenticated ? (<Game />) : (<Login />)        
      }
      
      
    
    </div>
  )
}
