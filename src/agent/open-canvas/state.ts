import {
  Artifact,
  ArtifactLengthOptions,
  LanguageOptions,
  ProgrammingLanguageOptions,
  ReadingLevelOptions,
  Highlight,
} from "../../types";
import { Annotation, MessagesAnnotation } from "@langchain/langgraph";

export const OpenCanvasGraphAnnotation = Annotation.Root({
  ...MessagesAnnotation.spec,
  /**
   * The part of the artifact the user highlighted. Use the `selectedArtifactId`
   * to determine which artifact the highlight belongs to.
   */
  highlighted: Annotation<Highlight | undefined>,
  /**
   * The artifacts that have been generated in the conversation.
   */
  artifact: Annotation<Artifact>,
  /**
   * The next node to route to. Only used for the first routing node/conditional edge.
   */
  next: Annotation<string | undefined>,
  /**
   * The language to translate the artifact to.
   */
  language: Annotation<LanguageOptions | undefined>,
  /**
   * The length of the artifact to regenerate to.
   */
  artifactLength: Annotation<ArtifactLengthOptions | undefined>,
  /**
   * Whether or not to regenerate with emojis.
   */
  regenerateWithEmojis: Annotation<boolean | undefined>,
  /**
   * The reading level to adjust the artifact to.
   */
  readingLevel: Annotation<ReadingLevelOptions | undefined>,
  /**
   * Whether or not to add comments to the code artifact.
   */
  addComments: Annotation<boolean | undefined>,
  /**
   * Whether or not to add logs to the code artifact.
   */
  addLogs: Annotation<boolean | undefined>,
  /**
   * The programming language to port the code artifact to.
   */
  portLanguage: Annotation<ProgrammingLanguageOptions | undefined>,
  /**
   * Whether or not to fix bugs in the code artifact.
   */
  fixBugs: Annotation<boolean | undefined>,
  /**
   * The name of the last node that was executed.
   */
  lastNodeName: Annotation<string | undefined>,
});

export type OpenCanvasGraphReturnType = Partial<
  typeof OpenCanvasGraphAnnotation.State
>;
