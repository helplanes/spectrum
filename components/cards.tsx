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
            <Button className="bg-pink-300 hover:bg-pink-200 mx-auto m-4" style={{ height: '30px' }}>
              <a href="/e-paradox">Register</a>
            </Button>
        </div>
        </div>
        <div className="card">
          <div className="card-content">
                Electrica &apos;24
                <i className="card-icon fa-regular fa-cat-space">
            <Image className="mx-auto mt-4 rounded-xl" width="210" height="300" alt="image" src="https://i.imgur.com/iHJRiHD.jpg" />
            </i>
            <Button className="bg-blue-500 hover:bg-blue-300 mx-auto m-4" style={{ height: '30px' }}>
            <a href="/electrica">Register</a>
            </Button>
        </div>
        </div>
        <div className="card">
          <div className="card-content">
                Brain Dasher &apos;24
                <i className="card-icon fa-regular fa-cat-space">
            <Image className="mx-auto mt-4 rounded-xl" width="210" height="300" alt="image" src="https://i.imgur.com/iOTNbx0.jpg" />
            </i>
            <Button className="bg-red-400 hover:bg-red-300 mx-auto m-4" style={{ height: '30px' }}>
            <a href="/brain-dasher">Register</a>
            </Button>
        </div>
        </div>
        <div className="card">
          <div className="card-content">
                Treasure Hunt &apos;24
                <i className="card-icon fa-regular fa-cat-space">
            <Image className="mx-auto mt-4 rounded-xl" width="210" height="300" alt="image" src="https://i.imgur.com/NDUkMk9.jpg" />
            </i>
            <Button className="bg-orange-500 hover:bg-orange-400 mx-auto m-4" style={{ height: '30px' }}>
            <a href="/treasure-hunt">Register</a>
            </Button>
        </div>
        </div>
        <div className="card">
          <div className="card-content">
                <i className="card-icon fa-regular fa-cat-space">
                Spectrum
            </i>
        </div>
        </div>
        <div className="card">
          <div className="card-content">
                Chem Prastuti &apos;24
                <i className="card-icon fa-regular fa-cat-space">
            <Image className="mx-auto mt-4 rounded-xl" width="210" height="300" alt="image" src="https://i.imgur.com/yJKEW8L.jpg" />
            </i>
            <Button className="bg-yellow-500 hover:bg-yellow-400 mx-auto m-4" style={{ height: '30px' }}>
            <a href="/chem-prastuti">Register</a>
            </Button>
        </div>
        </div>
        <div className="card">
          <div className="card-content">
                Bottle Rocket &apos;24
                <i className="card-icon fa-regular fa-cat-space">
            <Image className="mx-auto mt-4 rounded-xl" width="205" height="300" alt="image" src="https://i.imgur.com/oIA4Cya.jpg" />
            </i>
            <Button className="bg-green-500 hover:bg-green-400 mx-auto m-4" style={{ height: '30px' }}>
            <a href="/bottle-rocket">Register</a>
            </Button>
        </div>
        </div>
        <div className="card">
          <div className="card-content">
                Debate &apos;24
                <i className="card-icon fa-regular fa-cat-space">
            <Image className="mx-auto mt-4 rounded-xl" width="220" height="300" alt="image" src="https://i.imgur.com/mOpydMo.jpg" />
            </i>
            <Button className="bg-blue-500 hover:bg-blue-400 mx-auto m-4" style={{ height: '30px' }}>
            <a href="/debate">Register</a>
            </Button>
        </div>
        </div>
        <div className="card">
          <div className="card-content">
                Video Games &apos;24
                <i className="card-icon fa-regular fa-cat-space">
            <Image className="mx-auto mt-4 rounded-xl" width="200" height="300" alt="image" src="https://i.imgur.com/xvGbpGx.jpg" />
            </i>
            <Button className="bg-purple-500 hover:bg-purple-400 mx-auto m-4" style={{ height: '30px' }}>
            Register (Coming Soon)
            </Button>
        </div>
        </div>
      </div>
    )
  }