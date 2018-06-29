import { AutocompleteComponent } from 'src/app/showcase/autocomplete/autocomplete.component';
import { AppCommonModule } from 'src/app/app.common.module';
import { AutocompleteExample1Component } from 'src/app/showcase/autocomplete/examples/example1/autocomplete-example1/autocomplete-example1.component';

export default {
  title: 'Autocomplete',
};

export const example = () => ({
  component: AutocompleteComponent,
  moduleMetadata: {
    declarations: [
      AutocompleteExample1Component
    ],
    imports: [
      AppCommonModule
    ]
  }
})