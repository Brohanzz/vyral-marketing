import Button from "@/components/site/Button";
import PageHero from "@/components/site/PageHero";
import SiteChrome from "@/components/site/SiteChrome";

export default function NotFound() {
  return (
    <SiteChrome>
      <PageHero label="404" title="This page could not be found.">
        <Button href="/">Go to the homepage</Button>
      </PageHero>
    </SiteChrome>
  );
}
