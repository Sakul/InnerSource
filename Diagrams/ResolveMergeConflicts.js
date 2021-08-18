import { createGitgraph, templateExtend } from "@gitgraph/js";

const options = {
	orientation: "horizontal",
	template: templateExtend("blackarrow", {
		colors: [
			"#666666", // main
			"#008FB5", // feature
			"orange", // development
			"#FF0000", // hotfix
		],
	  }),
};
const graphContainer = document.getElementById("graph-container");
const gitgraph = createGitgraph(graphContainer, options);

const main = gitgraph.branch("main").commit();
const feature = main.branch("feature").commit();
main.commit();
const dev = feature.branch("development").commit().commit().commit();
feature.merge(dev);

const hotfix = main.branch("hotfix");
hotfix.merge(feature);

feature.merge(hotfix);
main.merge(feature);
