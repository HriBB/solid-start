import { pipeToNodeWritable } from "solid-js/web";
import { MetaProvider } from "solid-meta";
import { Router } from "solid-app-router";
import Root from "~/root";
import { StartProvider } from "../../components";
import renderActions from "../actionsServer";

export function render({ url, writable, manifest }) {
  const context = { tags: [] };
  const Start = props => (
    <StartProvider context={context} manifest={manifest}>
      <MetaProvider tags={context.tags}>
        <Router url={url} out={context}>
          {props.children}
        </Router>
      </MetaProvider>
    </StartProvider>
  );
  pipeToNodeWritable(() => <Root Start={Start} />, writable);
}

export { renderActions };
