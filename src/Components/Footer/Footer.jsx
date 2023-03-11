import Github from "../../Assets/Icons/github.svg"
import Linkedin from "../../Assets/Icons/linkedin.svg"

export default function Footer(){
    return(
        <footer className="flex items-center justify-center  bottom-5 px-3 mt-12">
                <h2 className="text-white text-[18px] pr-2">Powered by João Antonio</h2>
                <a href="https://www.linkedin.com/in/jo%C3%A3o-ant%C3%B4nio-martins-taveira-a4a599224/">
                    <img src={Linkedin} alt="" width={60}/>
                </a>
                <a href="https://github.com/joaotoni">
                    <img src={Github} alt="" width={60}/>
                </a>
        </footer>
    )
}