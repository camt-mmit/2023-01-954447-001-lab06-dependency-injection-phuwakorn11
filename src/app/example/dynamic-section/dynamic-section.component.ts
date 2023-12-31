import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DynamicInputComponent } from '../dynamic-input/dynamic-input.component';
import { SectionData } from '../types';

@Component({
  selector: 'app-dynamic-section',
  standalone: true,
  imports: [CommonModule, DynamicInputComponent],
  templateUrl: './dynamic-section.component.html',
  styleUrls: ['./dynamic-section.component.scss'],
})
export class DynamicSectionComponent {
  @Input({ required: true }) items!: SectionData;

  @Output() dataChange = new EventEmitter<SectionData>();
  isDisabled = true;

  disabled() {
    if (this.items.length === 1) {
      this.isDisabled = true;
    } else {
      this.isDisabled = false;
    }
  }

  addSection(): void {
    this.items.push([{ value: 0 }]);
    this.disabled();
    this.dataChange.emit(this.items);
  }

  deleteSection(index: number): void {
    this.items.splice(index, 1);
    this.disabled();
    this.dataChange.emit(this.items);
  }

  onDataChange(): void {
    this.dataChange.emit(this.items);
  }
}
