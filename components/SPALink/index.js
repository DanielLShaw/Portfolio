import React from "react";
import Link from "next/link";

const SPALink = ({ className, href, children }) => {
  const internalLinkRegex = new RegExp(/^\//);
  const isInternalLink = internalLinkRegex.test(href);

  if (isInternalLink) {
    return (
      <Link href={href}>
        <a className={className}>{children}</a>
      </Link>
    );
  }
  return (
    <a href={href} className={className} target="_blank" rel="noreferrer">
      {children}
    </a>
  );
};

export default SPALink;
