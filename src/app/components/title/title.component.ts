import { Component, input } from '@angular/core';

@Component({
  selector: 'app-title',
  template: `<h3
    class="text-6xl text-center py-8 bg-white shadow-md border-l border-gray-200"
  >
    {{ title() }}
  </h3>`,
})
export class AppTitleComponent {
  title = input.required<string>();
}
