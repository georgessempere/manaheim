import { Popover } from "@kobalte/core/popover";
import { type Component } from "solid-js";
import "./index.css";

export const DefinitionSolid: Component<{
  title: string;
  description: string;
}> = ({ title, description }) => (
  <Popover>
    <Popover.Trigger class="popover__trigger">{title}</Popover.Trigger>
    <Popover.Portal>
      <Popover.Content class="popover__content">
        <div class="popover__header">
          <Popover.Title class="popover__title">
            {title[0].toUpperCase() + title.slice(1)}
          </Popover.Title>
        </div>
        <Popover.Description class="popover__description">
          {description}
        </Popover.Description>
        <Popover.Arrow size={0} class="popover__arrow" />
      </Popover.Content>
    </Popover.Portal>
  </Popover>
);
