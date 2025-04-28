import { Button } from "@/components/ui/button";
import GithubIcon from "@/components/layout/Footer/GithubIcon";


const Footer = () => {

  return (
    <footer>
      <div className="flex items-center justify-between">
        <p className="text-xs text-primary">&copy; theqrisp.com</p>
        <a 
          href="https://github.com/mmarfat/qrisp" 
          target="_blank" 
          rel="noopener noreferrer"
        >
          <Button size="icon" variant="ghost" className="hover:bg-transparent">
            <GithubIcon />
          </Button>
        </a>
      </div>
    </footer>
  )
}

export default Footer;