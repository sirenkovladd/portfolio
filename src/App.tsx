import { LinkedinSvg, GithubSvg, EmailSvg, CopySvg, DiscordSvg, TelegramSvg, SkypeSvg, FacebookSvg } from "./svg";


function Link(props: { name: string, href: string, icon: any, class?: string, copy?: string | boolean }) {
  return <a class={props.class || props.name.toLowerCase()} href={props.href} target="_blank">
    {props.icon}
    <p>{props.name}</p>
    {props.copy && CopySvg}
  </a>
}

export default function Main() {
  return <>
    <div class="links">
      Links:
      <Link name="Linkedin" href="https://www.linkedin.com/in/sirenkovladd/" icon={LinkedinSvg} />
      <Link name="Github" href="https://github.com/sirenkovladd" icon={GithubSvg} />
      <Link class="email" href="mailto:vlad@sirenko.ca" icon={EmailSvg} name="vlad@sirenko.ca" copy={true} />
      <Link name="Discord" href="https://discordapp.com/users/418108770288140289" icon={DiscordSvg} />
      <Link name="Telegram" href="https://t.me/vlad_21" icon={TelegramSvg} />
      <Link name="Skype" href="https://join.skype.com/invite/DFZsGvkFKgEG" icon={SkypeSvg} />
      <Link name="Facebook" href="https://www.facebook.com/profile.php?id=100093939265382" icon={FacebookSvg} />
    </div>
    <div class="about">
      About
    </div>
  </>
}