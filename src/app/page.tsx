import Dessert from "./component/dessert";
import Drink from "./component/drink";
import Experience from "./component/experience";
import Hero from "./component/herosectionn";
import MainCours from "./component/maincourse";
import Navbar from "./navbar/navbar";
import PartnersAndClients from "./component/partnerclient";
import { Menu } from "lucide-react";
import Image from "next/image";
import FoodItems from "./component/fooditems";
import Hero1 from "./component/hero1";
import Hero2 from "./component/shopdetail/hero2";
import StarterMenu from "./component/menu";
import Main from "./main";

export default function Home() {
  return (
<>


   <Hero1/> 
 <FoodItems/>

    


<Hero/>
<StarterMenu/>
 <Menu/>
 <MainCours/>
 <Experience/>
 <Dessert/>
 <Drink/>
 <PartnersAndClients/>
 <Hero2/> 
    
</>
  );
}
