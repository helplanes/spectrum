import "../components/pag.css"
import Image from "next/image"
import { Button } from "./ui/button"

export default function Cards() {
    return (
        <div id="cards" className="mx-auto">
        <div className="card">
        <div className="card-content">
            E Paradox &apos;24
            <i className="card-icon fa-regular fa-cat-space">
            <Image className="mx-auto mt-4 rounded-xl" width="210" height="300" alt="image" src="https://i.imgur.com/sWzLWIW.jpg" />
            </i>
            <a href="/e-paradox">
            <Button className="bg-pink-300 hover:bg-pink-200 mx-auto m-4" style={{ height: '30px' }}>
              Register
            </Button>
            </a>
        </div>
        </div>
        <div className="card">
          <div className="card-content">
                Electrica &apos;24
                <i className="card-icon fa-regular fa-cat-space">
            <Image className="mx-auto mt-4 rounded-xl" width="210" height="300" alt="image" src="https://i.imgur.com/iHJRiHD.jpg" />
            </i>
            <a href="/electrica">
            <Button className="bg-blue-500 hover:bg-blue-300 mx-auto m-4" style={{ height: '30px' }}>
            Register
            </Button>
            </a>
        </div>
        </div>
        <div className="card">
          <div className="card-content">
                Brain Dasher &apos;24
                <i className="card-icon fa-regular fa-cat-space">
            <Image className="mx-auto mt-4 rounded-xl" width="210" height="300" alt="image" src="https://i.imgur.com/iOTNbx0.jpg" />
            </i>
            <a href="/brain-dasher">
            <Button className="bg-red-400 hover:bg-red-300 mx-auto m-4" style={{ height: '30px' }}>
              Register
            </Button>
            </a>
        </div>
        </div>
        <div className="card">
          <div className="card-content">
                Treasure Hunt &apos;24
                <i className="card-icon fa-regular fa-cat-space">
            <Image className="mx-auto mt-4 rounded-xl" width="210" height="300" alt="image" src="https://i.imgur.com/NDUkMk9.jpg" />
            </i>
            <a href="/treasure-hunt">
            <Button className="bg-orange-500 hover:bg-orange-400 mx-auto m-4" style={{ height: '30px' }}>
              Register
            </Button>
            </a>
        </div>
        </div>
        <div className="card">
          <div className="card-content">
                <i className="card-icon fa-regular fa-cat-space">
               <Image className="" width="200" height="200" src="https://i.imgur.com/HKZuMdo.png" alt="logo"/>
            </i>
        </div>
        </div>
        <div className="card">
          <div className="card-content">
                Chem Prastuti &apos;24
                <i className="card-icon fa-regular fa-cat-space">
            <Image className="mx-auto mt-4 rounded-xl" width="210" height="300" alt="image" src="https://i.imgur.com/yJKEW8L.jpg" />
            </i>
            <a href="/chem-prastuti">
            <Button className="bg-yellow-500 hover:bg-yellow-400 mx-auto m-4" style={{ height: '30px' }}>
              Register
            </Button>
            </a>
        </div>
        </div>
        <div className="card">
          <div className="card-content">
                Water Rocket &apos;24
                <i className="card-icon fa-regular fa-cat-space">
            <Image className="mx-auto mt-4 rounded-xl" width="205" height="300" alt="image" src="https://i.imgur.com/oIA4Cya.jpg" />
            </i>
            <a href="/bottle-rocket">
            <Button className="bg-green-500 hover:bg-green-400 mx-auto m-4" style={{ height: '30px' }}>
              Register
            </Button>
            </a>
        </div>
        </div>
        <div className="card">
          <div className="card-content">
              War of Words &apos;24
                <i className="card-icon fa-regular fa-cat-space">
            <Image className="mx-auto mt-4 rounded-xl" width="220" height="300" alt="image" src="https://i.imgur.com/mOpydMo.jpg" />
            </i>
            <a href="/debate">
              <Button className="bg-blue-500 hover:bg-blue-400 mx-auto m-4" style={{ height: '30px' }}>
              Register
              </Button>
            </a>
        </div>
        </div>
        <div className="card">
          <div className="card-content">
              High Ping &apos;24
                <i className="card-icon fa-regular fa-cat-space">
            <Image className="mx-auto mt-4 rounded-xl" width="200" height="300" alt="image" src="https://i.imgur.com/xvGbpGx.jpg" />
            </i>
            <a href="/video-games">
            <Button className="bg-purple-500 hover:bg-purple-400 mx-auto m-4" style={{ height: '30px' }}>
              Register
            </Button>
            </a>
        </div>
        </div>
      </div>
    )
  }