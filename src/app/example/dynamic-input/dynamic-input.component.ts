import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InputData } from '../types';

@Component({
  selector: 'app-dynamic-input',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './dynamic-input.component.html',
  styleUrls: ['./dynamic-input.component.scss'],
})
export class DynamicInputComponent {
  @Input({ required: true }) items!: InputData;

  @Output() readonly dataChange = new EventEmitter<void>();

  isDisabled = true;

  disabled() {
    if (this.items.length === 1) {
      this.isDisabled = true;
    } else {
      this.isDisabled = false;
    }
  }

  onChange(index: number, value: number): void {
    this.items[index].value = value;
    this.dataChange.emit();
  }

  addInput(): void {
    console.log('item');
    this.items.push({ value: 0 });
    this.disabled();
    this.dataChange.emit();
  }

  deleteInput(index: number): void {
    this.items.splice(index, 1);
    this.disabled();
    this.dataChange.emit();
  }

  getResult(): number {
    return this.items.reduce((prev, curr) => prev + curr.value, 0);
  }

  onDataChange(): void {
    this.dataChange.emit();
  }
}
