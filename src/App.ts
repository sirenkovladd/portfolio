import { LinkedinSvg, GithubSvg, EmailSvg, DiscordSvg, TelegramSvg, SkypeSvg, FacebookSvg } from "./svg.js";
import { CopySvg } from "./svg.js";
import { VanObj } from "mini-van-plate/shared";

export default function Main({ van }: { van: VanObj }) {
  const { a, p, div, script, main } = van.tags;

  const svgTags = van.tagsNS("http://www.w3.org/2000/svg");

  function Copy(props: { text?: string }) {
    return div({ class: "copy" }, CopySvg(svgTags));
  }

  function Link(props: {
    name: string;
    href: string;
    icon: any;
    class?: string;
    copy?: string | boolean;
  }) {
    return a(
      {
        class: props.class || props.name.toLowerCase(),
        href: props.href,
        target: "_blank",
      },
      props.icon,
      p(props.name),
      props.copy && Copy({ text: props.copy === true ? undefined : props.copy }),
    );
  }

  return main(
    { id: 'root' },
    div(
      { class: "links" },
      "Links:",
      Link({ name: "Linkedin", href: "https://www.linkedin.com/in/sirenkovladd/", icon: LinkedinSvg(svgTags) }),
      Link({ name: "Github", href: "https://github.com/sirenkovladd", icon: GithubSvg(svgTags) }),
      Link({ class: "email", href: "mailto:vlad@sirenko.ca", icon: EmailSvg(svgTags), name: "vlad@sirenko.ca", copy: true }),
      Link({ name: "Discord", href: "https://discordapp.com/users/418108770288140289", icon: DiscordSvg(svgTags) }),
      Link({ name: "Telegram", href: "https://t.me/vlad_21", icon: TelegramSvg(svgTags) }),
      Link({ name: "Skype", href: "https://join.skype.com/invite/DFZsGvkFKgEG", icon: SkypeSvg(svgTags) }),
      Link({ name: "Facebook", href: "https://www.facebook.com/profile.php?id=100093939265382", icon: FacebookSvg(svgTags) }),
      // script({
      //   text: `document.querySelectorAll('.copy').forEach(e=>{
      //   e.addEventListener('click', e => {
      //     navigator.clipboard.writeText('123');
      //     e.preventDefault();
      //   });
      // })`,
      // }),
    ),
    div({ class: "about" }, "About"),
  );
}
