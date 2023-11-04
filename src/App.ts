declare global {
  const Toastify: (d: any) => any;
}

import { LinkedinSvg, GithubSvg, EmailSvg, DiscordSvg, TelegramSvg, SkypeSvg, FacebookSvg } from "./svg.js";
import { CopySvg } from "./svg.js";
import { VanObj } from "mini-van-plate/shared";

export default function Main({ van }: { van: VanObj }) {
  const { a, p, div, main } = van.tags;

  const svgTags = van.tagsNS("http://www.w3.org/2000/svg");

  function Copy(props: { text: string }) {
    return div(
      {
        class: "copy",
        onclick: (e) => {
          e.stopPropagation();
          e.preventDefault();
          navigator.clipboard.writeText(props.text);
          Toastify({
            text: "Copied to clipboard",
            duration: 3000,
            close: true,
            gravity: "bottom",
            position: "center",
            stopOnFocus: true,
            style: {
              background: "linear-gradient(to right, #00b09b, #96c93d)",
            },
          }).showToast();
        },
      },
      CopySvg(typeof window === "undefined" ? { style: "cursor: not-allowed;" } : {}, svgTags),
    );
  }

  if (typeof window !== "undefined") {
    if (window.location.pathname !== "/") {
      window.location.href = "/";
    }
  }

  function Link(props: {
    name: string;
    href: string;
    icon: any;
    class?: string;
    copy?: string | boolean;
  }) {
    return div(
      { class: "wrap-link" },
      a(
        {
          class: props.class || props.name.toLowerCase(),
          href: props.href,
          target: "_blank",
        },
        props.icon,
        p(props.name),
        props.copy && div({ class: "copy-block" })
      ),
      props.copy && Copy({ text: props.copy === true ? props.name : props.copy }),
    );
  }

  return main(
    { id: "root" },
    div(
      { class: "links" },
      div({ class: "links-title" }, "Links:"),
      Link({ name: "Linkedin", href: "https://www.linkedin.com/in/sirenkovladd/", icon: LinkedinSvg(svgTags) }),
      Link({ name: "Github", href: "https://github.com/sirenkovladd", icon: GithubSvg(svgTags) }),
      Link({ class: "email", href: "mailto:vlad@sirenko.ca", icon: EmailSvg(svgTags), name: "vlad@sirenko.ca", copy: true }),
      Link({ name: "Discord", href: "https://discordapp.com/users/418108770288140289", icon: DiscordSvg(svgTags) }),
      Link({ name: "Telegram", href: "https://t.me/vlad_21", icon: TelegramSvg(svgTags) }),
      Link({ name: "Skype", href: "https://join.skype.com/invite/DFZsGvkFKgEG", icon: SkypeSvg(svgTags) }),
      Link({ name: "Facebook", href: "https://www.facebook.com/profile.php?id=100093939265382", icon: FacebookSvg(svgTags) }),
    ),
    div(
      { class: "about" },
      div({ class: "about-title" }, "About:"),
      div(
        { class: "about-text" },
        [
          "have a lot of knowledge about js (solid, react, node, bun...), gis, golang, HL.",
          "Relevant experience of more than 4 years.",
          "Contributor of many projects (bun, solid.js, fastify...), member of vite subproject (Tinylibs)",
        ].map((text) => div({ class: "about-text-item" }, text)),
      ),
    ),
  );
}
