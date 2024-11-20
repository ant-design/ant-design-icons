import { EnvironmentProviders, makeEnvironmentProviders } from "@angular/core";
import { ANT_ICONS } from "./icon.service";
import { IconDefinition } from "../types";

/**
 * Provide icon definitions in root
 *
 * @param icons Icon definitions
 */
export function provideAntIcons(icons: IconDefinition[]): EnvironmentProviders {
  return makeEnvironmentProviders([
    {
      provide: ANT_ICONS,
      useValue: icons
    }
  ]);
}
