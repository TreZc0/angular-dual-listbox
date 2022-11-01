import { Component, EventEmitter, Input, Output } from '@angular/core';
import { BasicList } from './basic-list';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
import * as i2 from "@angular/forms";
function DualListComponent_form_4_Template(rf, ctx) { if (rf & 1) {
    const _r5 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "form", 11)(1, "input", 12);
    i0.ɵɵlistener("ngModelChange", function DualListComponent_form_4_Template_input_ngModelChange_1_listener($event) { i0.ɵɵrestoreView(_r5); const ctx_r4 = i0.ɵɵnextContext(); return ctx_r4.available.picker = $event; })("ngModelChange", function DualListComponent_form_4_Template_input_ngModelChange_1_listener() { i0.ɵɵrestoreView(_r5); const ctx_r6 = i0.ɵɵnextContext(); return ctx_r6.onFilter(ctx_r6.available); });
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngModel", ctx_r0.available.picker);
} }
const _c0 = function (a0, a1) { return { selected: a0, disabled: a1 }; };
function DualListComponent_li_7_Template(rf, ctx) { if (rf & 1) {
    const _r10 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "li", 13);
    i0.ɵɵlistener("click", function DualListComponent_li_7_Template_li_click_0_listener($event) { const restoredCtx = i0.ɵɵrestoreView(_r10); const item_r7 = restoredCtx.$implicit; const idx_r8 = restoredCtx.index; const ctx_r9 = i0.ɵɵnextContext(); ctx_r9.disabled ? null : ctx_r9.selectItem(ctx_r9.available.pick, item_r7); return ctx_r9.shiftClick($event, idx_r8, ctx_r9.available, item_r7); })("dragstart", function DualListComponent_li_7_Template_li_dragstart_0_listener($event) { const restoredCtx = i0.ɵɵrestoreView(_r10); const item_r7 = restoredCtx.$implicit; const ctx_r11 = i0.ɵɵnextContext(); return ctx_r11.drag($event, item_r7, ctx_r11.available); })("dragend", function DualListComponent_li_7_Template_li_dragend_0_listener() { i0.ɵɵrestoreView(_r10); const ctx_r12 = i0.ɵɵnextContext(); return ctx_r12.dragEnd(ctx_r12.available); });
    i0.ɵɵelementStart(1, "label");
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const item_r7 = ctx.$implicit;
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵproperty("ngClass", i0.ɵɵpureFunction2(3, _c0, ctx_r1.isItemSelected(ctx_r1.available.pick, item_r7), ctx_r1.disabled))("draggable", !ctx_r1.disabled && ctx_r1.format.draggable);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(item_r7._name);
} }
function DualListComponent_form_16_Template(rf, ctx) { if (rf & 1) {
    const _r14 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "form", 11)(1, "input", 14);
    i0.ɵɵlistener("ngModelChange", function DualListComponent_form_16_Template_input_ngModelChange_1_listener($event) { i0.ɵɵrestoreView(_r14); const ctx_r13 = i0.ɵɵnextContext(); return ctx_r13.confirmed.picker = $event; })("ngModelChange", function DualListComponent_form_16_Template_input_ngModelChange_1_listener() { i0.ɵɵrestoreView(_r14); const ctx_r15 = i0.ɵɵnextContext(); return ctx_r15.onFilter(ctx_r15.confirmed); });
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r2 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngModel", ctx_r2.confirmed.picker);
} }
function DualListComponent_li_19_Template(rf, ctx) { if (rf & 1) {
    const _r20 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "li", 13, 15);
    i0.ɵɵlistener("click", function DualListComponent_li_19_Template_li_click_0_listener($event) { const restoredCtx = i0.ɵɵrestoreView(_r20); const item_r16 = restoredCtx.$implicit; const idx_r17 = restoredCtx.index; const ctx_r19 = i0.ɵɵnextContext(); ctx_r19.disabled ? null : ctx_r19.selectItem(ctx_r19.confirmed.pick, item_r16); return ctx_r19.shiftClick($event, idx_r17, ctx_r19.confirmed, item_r16); })("dragstart", function DualListComponent_li_19_Template_li_dragstart_0_listener($event) { const restoredCtx = i0.ɵɵrestoreView(_r20); const item_r16 = restoredCtx.$implicit; const ctx_r21 = i0.ɵɵnextContext(); return ctx_r21.drag($event, item_r16, ctx_r21.confirmed); })("dragend", function DualListComponent_li_19_Template_li_dragend_0_listener() { i0.ɵɵrestoreView(_r20); const ctx_r22 = i0.ɵɵnextContext(); return ctx_r22.dragEnd(ctx_r22.confirmed); });
    i0.ɵɵelementStart(2, "label");
    i0.ɵɵtext(3);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const item_r16 = ctx.$implicit;
    const ctx_r3 = i0.ɵɵnextContext();
    i0.ɵɵproperty("ngClass", i0.ɵɵpureFunction2(3, _c0, ctx_r3.isItemSelected(ctx_r3.confirmed.pick, item_r16), ctx_r3.disabled))("draggable", !ctx_r3.disabled && ctx_r3.format.draggable);
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate(item_r16._name);
} }
const _c1 = function (a0, a1) { return { "order": a0, "margin-left": a1 }; };
const _c2 = function (a0, a1) { return { "max-height": a0, "min-height": a1 }; };
const _c3 = function (a0) { return { over: a0 }; };
var nextId = 0;
export class DualListComponent {
    constructor(differs) {
        this.differs = differs;
        this.id = `dual-list-${nextId++}`;
        this.key = '_id';
        this.display = '_name';
        this.height = '100px';
        this.filter = false;
        this.format = DualListComponent.DEFAULT_FORMAT;
        this.sort = false;
        this.disabled = false;
        this.destinationChange = new EventEmitter();
        this.sorter = (a, b) => { return (a._name < b._name) ? -1 : ((a._name > b._name) ? 1 : 0); };
        this.available = new BasicList(DualListComponent.AVAILABLE_LIST_NAME);
        this.confirmed = new BasicList(DualListComponent.CONFIRMED_LIST_NAME);
    }
    ngOnChanges(changeRecord) {
        if (changeRecord['filter']) {
            if (changeRecord['filter'].currentValue === false) {
                this.clearFilter(this.available);
                this.clearFilter(this.confirmed);
            }
        }
        if (changeRecord['sort']) {
            if (changeRecord['sort'].currentValue === true && this.compare === undefined) {
                this.compare = this.sorter;
            }
            else if (changeRecord['sort'].currentValue === false) {
                this.compare = undefined;
            }
        }
        if (changeRecord['format']) {
            this.format = changeRecord['format'].currentValue;
            if (typeof (this.format.direction) === 'undefined') {
                this.format.direction = DualListComponent.LTR;
            }
            if (typeof (this.format.add) === 'undefined') {
                this.format.add = DualListComponent.DEFAULT_FORMAT.add;
            }
            if (typeof (this.format.remove) === 'undefined') {
                this.format.remove = DualListComponent.DEFAULT_FORMAT.remove;
            }
            if (typeof (this.format.all) === 'undefined') {
                this.format.all = DualListComponent.DEFAULT_FORMAT.all;
            }
            if (typeof (this.format.none) === 'undefined') {
                this.format.none = DualListComponent.DEFAULT_FORMAT.none;
            }
            if (typeof (this.format.draggable) === 'undefined') {
                this.format.draggable = DualListComponent.DEFAULT_FORMAT.draggable;
            }
        }
        if (changeRecord['source']) {
            this.available = new BasicList(DualListComponent.AVAILABLE_LIST_NAME);
            this.updatedSource();
            this.updatedDestination();
        }
        if (changeRecord['destination']) {
            this.confirmed = new BasicList(DualListComponent.CONFIRMED_LIST_NAME);
            this.updatedDestination();
            this.updatedSource();
        }
    }
    ngDoCheck() {
        if (this.source && this.buildAvailable(this.source)) {
            this.onFilter(this.available);
        }
        if (this.destination && this.buildConfirmed(this.destination)) {
            this.onFilter(this.confirmed);
        }
    }
    buildAvailable(source) {
        const sourceChanges = this.sourceDiffer.diff(source);
        if (sourceChanges) {
            sourceChanges.forEachRemovedItem((r) => {
                const idx = this.findItemIndex(this.available.list, r.item, this.key);
                if (idx !== -1) {
                    this.available.list.splice(idx, 1);
                }
            });
            sourceChanges.forEachAddedItem((r) => {
                // Do not add duplicates even if source has duplicates.
                if (this.findItemIndex(this.available.list, r.item, this.key) === -1) {
                    this.available.list.push({ _id: this.makeId(r.item), _name: this.makeName(r.item) });
                }
            });
            if (this.compare !== undefined) {
                this.available.list.sort(this.compare);
            }
            this.available.sift = this.available.list;
            return true;
        }
        return false;
    }
    buildConfirmed(destination) {
        let moved = false;
        const destChanges = this.destinationDiffer.diff(destination);
        if (destChanges) {
            destChanges.forEachRemovedItem((r) => {
                const idx = this.findItemIndex(this.confirmed.list, r.item, this.key);
                if (idx !== -1) {
                    if (!this.isItemSelected(this.confirmed.pick, this.confirmed.list[idx])) {
                        this.selectItem(this.confirmed.pick, this.confirmed.list[idx]);
                    }
                    this.moveItem(this.confirmed, this.available, this.confirmed.list[idx], false);
                    moved = true;
                }
            });
            destChanges.forEachAddedItem((r) => {
                const idx = this.findItemIndex(this.available.list, r.item, this.key);
                if (idx !== -1) {
                    if (!this.isItemSelected(this.available.pick, this.available.list[idx])) {
                        this.selectItem(this.available.pick, this.available.list[idx]);
                    }
                    this.moveItem(this.available, this.confirmed, this.available.list[idx], false);
                    moved = true;
                }
            });
            if (this.compare !== undefined) {
                this.confirmed.list.sort(this.compare);
            }
            this.confirmed.sift = this.confirmed.list;
            if (moved) {
                this.trueUp();
            }
            return true;
        }
        return false;
    }
    updatedSource() {
        this.available.list.length = 0;
        this.available.pick.length = 0;
        if (this.source !== undefined) {
            this.sourceDiffer = this.differs.find(this.source).create(null);
        }
    }
    updatedDestination() {
        if (this.destination !== undefined) {
            this.destinationDiffer = this.differs.find(this.destination).create(null);
        }
    }
    direction() {
        return this.format.direction === DualListComponent.LTR;
    }
    dragEnd(list = null) {
        if (list) {
            list.dragStart = false;
        }
        else {
            this.available.dragStart = false;
            this.confirmed.dragStart = false;
        }
        return false;
    }
    drag(event, item, list) {
        if (!this.isItemSelected(list.pick, item)) {
            this.selectItem(list.pick, item);
        }
        list.dragStart = true;
        // Set a custom type to be this dual-list's id.
        event.dataTransfer.setData(this.id, item['_id']);
    }
    allowDrop(event, list) {
        if (event.dataTransfer.types.length && (event.dataTransfer.types[0] === this.id)) {
            event.preventDefault();
            if (!list.dragStart) {
                list.dragOver = true;
            }
        }
        return false;
    }
    dragLeave() {
        this.available.dragOver = false;
        this.confirmed.dragOver = false;
    }
    drop(event, list) {
        if (event.dataTransfer.types.length && (event.dataTransfer.types[0] === this.id)) {
            event.preventDefault();
            this.dragLeave();
            this.dragEnd();
            if (list === this.available) {
                this.moveItem(this.available, this.confirmed);
            }
            else {
                this.moveItem(this.confirmed, this.available);
            }
        }
    }
    trueUp() {
        let changed = false;
        // Clear removed items.
        let pos = this.destination.length;
        while ((pos -= 1) >= 0) {
            const mv = this.confirmed.list.filter(conf => {
                if (typeof this.destination[pos] === 'object') {
                    return conf._id === this.destination[pos][this.key];
                }
                else {
                    return conf._id === this.destination[pos];
                }
            });
            if (mv.length === 0) {
                // Not found so remove.
                this.destination.splice(pos, 1);
                changed = true;
            }
        }
        // Push added items.
        for (let i = 0, len = this.confirmed.list.length; i < len; i += 1) {
            let mv = this.destination.filter((d) => {
                if (typeof d === 'object') {
                    return (d[this.key] === this.confirmed.list[i]._id);
                }
                else {
                    return (d === this.confirmed.list[i]._id);
                }
            });
            if (mv.length === 0) {
                // Not found so add.
                mv = this.source.filter((o) => {
                    if (typeof o === 'object') {
                        return (o[this.key] === this.confirmed.list[i]._id);
                    }
                    else {
                        return (o === this.confirmed.list[i]._id);
                    }
                });
                if (mv.length > 0) {
                    this.destination.push(mv[0]);
                    changed = true;
                }
            }
        }
        if (changed) {
            this.destinationChange.emit(this.destination);
        }
    }
    findItemIndex(list, item, key = '_id') {
        let idx = -1;
        function matchObject(e) {
            if (e._id === item[key]) {
                idx = list.indexOf(e);
                return true;
            }
            return false;
        }
        function match(e) {
            if (e._id === item) {
                idx = list.indexOf(e);
                return true;
            }
            return false;
        }
        // Assumption is that the arrays do not have duplicates.
        if (typeof item === 'object') {
            list.filter(matchObject);
        }
        else {
            list.filter(match);
        }
        return idx;
    }
    makeUnavailable(source, item) {
        const idx = source.list.indexOf(item);
        if (idx !== -1) {
            source.list.splice(idx, 1);
        }
    }
    moveItem(source, target, item = null, trueup = true) {
        let i = 0;
        let len = source.pick.length;
        if (item) {
            i = source.list.indexOf(item);
            len = i + 1;
        }
        for (; i < len; i += 1) {
            // Is the pick still in list?
            let mv = [];
            if (item) {
                const idx = this.findItemIndex(source.pick, item);
                if (idx !== -1) {
                    mv[0] = source.pick[idx];
                }
            }
            else {
                mv = source.list.filter(src => {
                    return (src._id === source.pick[i]._id);
                });
            }
            // Should only ever be 1
            if (mv.length === 1) {
                // Add if not already in target.
                if (target.list.filter(trg => trg._id === mv[0]._id).length === 0) {
                    target.list.push(mv[0]);
                }
                this.makeUnavailable(source, mv[0]);
            }
        }
        if (this.compare !== undefined) {
            target.list.sort(this.compare);
        }
        source.pick.length = 0;
        // Update destination
        if (trueup) {
            this.trueUp();
        }
        // Delay ever-so-slightly to prevent race condition.
        setTimeout(() => {
            this.onFilter(source);
            this.onFilter(target);
        }, 10);
    }
    isItemSelected(list, item) {
        if (list.filter(e => Object.is(e, item)).length > 0) {
            return true;
        }
        return false;
    }
    shiftClick(event, index, source, item) {
        if (event.shiftKey && source.last && !Object.is(item, source.last)) {
            const idx = source.sift.indexOf(source.last);
            if (index > idx) {
                for (let i = (idx + 1); i < index; i += 1) {
                    this.selectItem(source.pick, source.sift[i]);
                }
            }
            else if (idx !== -1) {
                for (let i = (index + 1); i < idx; i += 1) {
                    this.selectItem(source.pick, source.sift[i]);
                }
            }
        }
        source.last = item;
    }
    selectItem(list, item) {
        const pk = list.filter((e) => {
            return Object.is(e, item);
        });
        if (pk.length > 0) {
            // Already in list, so deselect.
            for (let i = 0, len = pk.length; i < len; i += 1) {
                const idx = list.indexOf(pk[i]);
                if (idx !== -1) {
                    list.splice(idx, 1);
                }
            }
        }
        else {
            list.push(item);
        }
    }
    selectAll(source) {
        source.pick.length = 0;
        source.pick = source.sift.slice(0);
    }
    selectNone(source) {
        source.pick.length = 0;
    }
    isAllSelected(source) {
        if (source.list.length === 0 || source.list.length === source.pick.length) {
            return true;
        }
        return false;
    }
    isAnySelected(source) {
        if (source.pick.length > 0) {
            return true;
        }
        return false;
    }
    unpick(source) {
        for (let i = source.pick.length - 1; i >= 0; i -= 1) {
            if (source.sift.indexOf(source.pick[i]) === -1) {
                source.pick.splice(i, 1);
            }
        }
    }
    clearFilter(source) {
        if (source) {
            source.picker = '';
            this.onFilter(source);
        }
    }
    onFilter(source) {
        if (source.picker.length > 0) {
            try {
                const filtered = source.list.filter((item) => {
                    if (Object.prototype.toString.call(item) === '[object Object]') {
                        if (item._name !== undefined) {
                            // @ts-ignore: remove when d.ts has locale as an argument.
                            return item._name.toLocaleLowerCase(this.format.locale).indexOf(source.picker.toLocaleLowerCase(this.format.locale)) !== -1;
                        }
                        else {
                            // @ts-ignore: remove when d.ts has locale as an argument.
                            return JSON.stringify(item).toLocaleLowerCase(this.format.locale).indexOf(source.picker.toLocaleLowerCase(this.format.locale)) !== -1;
                        }
                    }
                    else {
                        // @ts-ignore: remove when d.ts has locale as an argument.
                        return item.toLocaleLowerCase(this.format.locale).indexOf(source.picker.toLocaleLowerCase(this.format.locale)) !== -1;
                    }
                });
                source.sift = filtered;
                this.unpick(source);
            }
            catch (e) {
                if (e instanceof RangeError) {
                    this.format.locale = undefined;
                }
                source.sift = source.list;
            }
        }
        else {
            source.sift = source.list;
        }
    }
    makeId(item) {
        if (typeof item === 'object') {
            return item[this.key];
        }
        else {
            return item;
        }
    }
    // Allow for complex names by passing an array of strings.
    // Example: [display]="[ '_type.substring(0,1)', '_name' ]"
    makeName(item, separator = '_') {
        const display = this.display;
        function fallback(itm) {
            switch (Object.prototype.toString.call(itm)) {
                case '[object Number]':
                    return itm;
                case '[object String]':
                    return itm;
                default:
                    if (itm !== undefined) {
                        return itm[display];
                    }
                    else {
                        return 'undefined';
                    }
            }
        }
        let str = '';
        if (this.display !== undefined) {
            switch (Object.prototype.toString.call(this.display)) {
                case '[object Function]':
                    str = this.display(item);
                    break;
                case '[object Array]':
                    for (let i = 0, len = this.display.length; i < len; i += 1) {
                        if (str.length > 0) {
                            str = str + separator;
                        }
                        if (this.display[i].indexOf('.') === -1) {
                            // Simple, just add to string.
                            str = str + item[this.display[i]];
                        }
                        else {
                            // Complex, some action needs to be performed
                            const parts = this.display[i].split('.');
                            const s = item[parts[0]];
                            if (s) {
                                // Use brute force
                                if (parts[1].indexOf('substring') !== -1) {
                                    const nums = (parts[1].substring(parts[1].indexOf('(') + 1, parts[1].indexOf(')'))).split(',');
                                    switch (nums.length) {
                                        case 1:
                                            str = str + s.substring(parseInt(nums[0], 10));
                                            break;
                                        case 2:
                                            str = str + s.substring(parseInt(nums[0], 10), parseInt(nums[1], 10));
                                            break;
                                        default:
                                            str = str + s;
                                            break;
                                    }
                                }
                                else {
                                    // method not approved, so just add s.
                                    str = str + s;
                                }
                            }
                        }
                    }
                    break;
                default:
                    str = fallback(item);
                    break;
            }
        }
        else {
            str = fallback(item);
        }
        return str;
    }
}
DualListComponent.AVAILABLE_LIST_NAME = 'available';
DualListComponent.CONFIRMED_LIST_NAME = 'confirmed';
DualListComponent.LTR = 'left-to-right';
DualListComponent.RTL = 'right-to-left';
DualListComponent.DEFAULT_FORMAT = {
    add: 'Add',
    remove: 'Remove',
    all: 'All',
    none: 'None',
    direction: DualListComponent.LTR,
    draggable: true,
    locale: undefined
};
DualListComponent.ɵfac = function DualListComponent_Factory(t) { return new (t || DualListComponent)(i0.ɵɵdirectiveInject(i0.IterableDiffers)); };
DualListComponent.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: DualListComponent, selectors: [["dual-list"]], inputs: { id: "id", key: "key", display: "display", height: "height", filter: "filter", format: "format", sort: "sort", compare: "compare", disabled: "disabled", source: "source", destination: "destination" }, outputs: { destinationChange: "destinationChange" }, features: [i0.ɵɵNgOnChangesFeature], decls: 25, vars: 40, consts: [[1, "dual-list"], [1, "listbox", 3, "ngStyle"], ["type", "button", "name", "addBtn", 1, "btn", "btn-primary", "btn-block", 3, "ngClass", "disabled", "click"], ["class", "filter", 4, "ngIf"], [1, "record-picker"], [3, "ngStyle", "ngClass", "drop", "dragover", "dragleave"], [3, "ngClass", "draggable", "click", "dragstart", "dragend", 4, "ngFor", "ngForOf"], [1, "button-bar"], ["type", "button", 1, "btn", "btn-primary", "pull-left", 3, "disabled", "click"], ["type", "button", 1, "btn", "btn-default", "pull-right", 3, "disabled", "click"], ["type", "button", "name", "removeBtn", 1, "btn", "btn-primary", "btn-block", 3, "ngClass", "disabled", "click"], [1, "filter"], ["name", "filterSource", 1, "form-control", 3, "ngModel", "ngModelChange"], [3, "ngClass", "draggable", "click", "dragstart", "dragend"], ["name", "filterDestination", 1, "form-control", 3, "ngModel", "ngModelChange"], ["itmConf", ""]], template: function DualListComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "div", 0)(1, "div", 1)(2, "button", 2);
        i0.ɵɵlistener("click", function DualListComponent_Template_button_click_2_listener() { return ctx.moveItem(ctx.available, ctx.confirmed); });
        i0.ɵɵtext(3);
        i0.ɵɵelementEnd();
        i0.ɵɵtemplate(4, DualListComponent_form_4_Template, 2, 1, "form", 3);
        i0.ɵɵelementStart(5, "div", 4)(6, "ul", 5);
        i0.ɵɵlistener("drop", function DualListComponent_Template_ul_drop_6_listener($event) { return ctx.drop($event, ctx.confirmed); })("dragover", function DualListComponent_Template_ul_dragover_6_listener($event) { return ctx.allowDrop($event, ctx.available); })("dragleave", function DualListComponent_Template_ul_dragleave_6_listener() { return ctx.dragLeave(); });
        i0.ɵɵtemplate(7, DualListComponent_li_7_Template, 3, 6, "li", 6);
        i0.ɵɵelementEnd()();
        i0.ɵɵelementStart(8, "div", 7)(9, "button", 8);
        i0.ɵɵlistener("click", function DualListComponent_Template_button_click_9_listener() { return ctx.selectAll(ctx.available); });
        i0.ɵɵtext(10);
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(11, "button", 9);
        i0.ɵɵlistener("click", function DualListComponent_Template_button_click_11_listener() { return ctx.selectNone(ctx.available); });
        i0.ɵɵtext(12);
        i0.ɵɵelementEnd()()();
        i0.ɵɵelementStart(13, "div", 1)(14, "button", 10);
        i0.ɵɵlistener("click", function DualListComponent_Template_button_click_14_listener() { return ctx.moveItem(ctx.confirmed, ctx.available); });
        i0.ɵɵtext(15);
        i0.ɵɵelementEnd();
        i0.ɵɵtemplate(16, DualListComponent_form_16_Template, 2, 1, "form", 3);
        i0.ɵɵelementStart(17, "div", 4)(18, "ul", 5);
        i0.ɵɵlistener("drop", function DualListComponent_Template_ul_drop_18_listener($event) { return ctx.drop($event, ctx.available); })("dragover", function DualListComponent_Template_ul_dragover_18_listener($event) { return ctx.allowDrop($event, ctx.confirmed); })("dragleave", function DualListComponent_Template_ul_dragleave_18_listener() { return ctx.dragLeave(); });
        i0.ɵɵtemplate(19, DualListComponent_li_19_Template, 4, 6, "li", 6);
        i0.ɵɵelementEnd()();
        i0.ɵɵelementStart(20, "div", 7)(21, "button", 8);
        i0.ɵɵlistener("click", function DualListComponent_Template_button_click_21_listener() { return ctx.selectAll(ctx.confirmed); });
        i0.ɵɵtext(22);
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(23, "button", 9);
        i0.ɵɵlistener("click", function DualListComponent_Template_button_click_23_listener() { return ctx.selectNone(ctx.confirmed); });
        i0.ɵɵtext(24);
        i0.ɵɵelementEnd()()()();
    } if (rf & 2) {
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngStyle", i0.ɵɵpureFunction2(24, _c1, ctx.direction() ? 1 : 2, ctx.direction() ? 0 : "10px"));
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngClass", ctx.direction() ? "point-right" : "point-left")("disabled", ctx.available.pick.length === 0);
        i0.ɵɵadvance(1);
        i0.ɵɵtextInterpolate(ctx.format.add);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", ctx.filter);
        i0.ɵɵadvance(2);
        i0.ɵɵproperty("ngStyle", i0.ɵɵpureFunction2(27, _c2, ctx.height, ctx.height))("ngClass", i0.ɵɵpureFunction1(30, _c3, ctx.available.dragOver));
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngForOf", ctx.available.sift);
        i0.ɵɵadvance(2);
        i0.ɵɵproperty("disabled", ctx.disabled || ctx.isAllSelected(ctx.available));
        i0.ɵɵadvance(1);
        i0.ɵɵtextInterpolate(ctx.format.all);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("disabled", !ctx.isAnySelected(ctx.available));
        i0.ɵɵadvance(1);
        i0.ɵɵtextInterpolate(ctx.format.none);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngStyle", i0.ɵɵpureFunction2(32, _c1, ctx.direction() ? 2 : 1, ctx.direction() ? "10px" : 0));
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngClass", ctx.direction() ? "point-left" : "point-right")("disabled", ctx.confirmed.pick.length === 0);
        i0.ɵɵadvance(1);
        i0.ɵɵtextInterpolate(ctx.format.remove);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", ctx.filter);
        i0.ɵɵadvance(2);
        i0.ɵɵproperty("ngStyle", i0.ɵɵpureFunction2(35, _c2, ctx.height, ctx.height))("ngClass", i0.ɵɵpureFunction1(38, _c3, ctx.confirmed.dragOver));
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngForOf", ctx.confirmed.sift);
        i0.ɵɵadvance(2);
        i0.ɵɵproperty("disabled", ctx.disabled || ctx.isAllSelected(ctx.confirmed));
        i0.ɵɵadvance(1);
        i0.ɵɵtextInterpolate(ctx.format.all);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("disabled", !ctx.isAnySelected(ctx.confirmed));
        i0.ɵɵadvance(1);
        i0.ɵɵtextInterpolate(ctx.format.none);
    } }, directives: [i1.NgStyle, i1.NgClass, i1.NgIf, i2.ɵNgNoValidate, i2.NgControlStatusGroup, i2.NgForm, i2.DefaultValueAccessor, i2.NgControlStatus, i2.NgModel, i1.NgForOf], styles: ["div.record-picker[_ngcontent-%COMP%]{overflow-x:hidden;overflow-y:auto;border:1px solid #ddd;border-radius:8px;position:relative;cursor:pointer}div.record-picker[_ngcontent-%COMP%]::-webkit-scrollbar{width:12px}div.record-picker[_ngcontent-%COMP%]::-webkit-scrollbar-button{width:0px;height:0px}div.record-picker[_ngcontent-%COMP%]{scrollbar-base-color:#337ab7;scrollbar-3dlight-color:#337ab7;scrollbar-highlight-color:#337ab7;scrollbar-track-color:#eee;scrollbar-arrow-color:gray;scrollbar-shadow-color:gray;scrollbar-dark-shadow-color:gray}div.record-picker[_ngcontent-%COMP%]::-webkit-scrollbar-track{background:#eee;box-shadow:0 0 3px #dfdfdf inset;border-top-right-radius:8px;border-bottom-right-radius:8px}div.record-picker[_ngcontent-%COMP%]::-webkit-scrollbar-thumb{background:#337ab7;border:thin solid gray;border-top-right-radius:8px;border-bottom-right-radius:8px}div.record-picker[_ngcontent-%COMP%]::-webkit-scrollbar-thumb:hover{background:#286090}.record-picker[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]{margin:0;padding:0 0 1px}.record-picker[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{border-top:thin solid #ddd;border-bottom:1px solid #ddd;display:block;padding:2px 2px 2px 10px;margin-bottom:-1px;font-size:.85em;cursor:pointer;white-space:nowrap;min-height:16px}.record-picker[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:hover{background-color:#f5f5f5}.record-picker[_ngcontent-%COMP%]   li.selected[_ngcontent-%COMP%]{background-color:#d9edf7}.record-picker[_ngcontent-%COMP%]   li.selected[_ngcontent-%COMP%]:hover{background-color:#c4e3f3}.record-picker[_ngcontent-%COMP%]   li.disabled[_ngcontent-%COMP%]{opacity:.5;cursor:default;background-color:inherit}.record-picker[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:first-child{border-top-left-radius:8px;border-top-right-radius:8px;border-top:none}.record-picker[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:last-child{border-bottom-left-radius:8px;border-bottom-right-radius:8px;border-bottom:none}.record-picker[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]{cursor:pointer;font-weight:inherit;font-size:14px;padding:4px;margin-bottom:-1px;-webkit-touch-callout:none;-webkit-user-select:none;-moz-user-select:none;user-select:none}.record-picker[_ngcontent-%COMP%]   ul.over[_ngcontent-%COMP%]{background-color:#d3d3d3}.dual-list[_ngcontent-%COMP%]{display:flex;flex-direction:row;align-content:flex-start}.dual-list[_ngcontent-%COMP%]   .listbox[_ngcontent-%COMP%]{width:50%;margin:0}.dual-list[_ngcontent-%COMP%]   .button-bar[_ngcontent-%COMP%]{margin-top:8px}.point-right[_ngcontent-%COMP%]:after{content:\"\\25b6\";padding-left:1em}.point-left[_ngcontent-%COMP%]:before{content:\"\\25c0\";padding-right:1em}.dual-list[_ngcontent-%COMP%]   .button-bar[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{width:47%}button.btn-block[_ngcontent-%COMP%]{display:block;width:100%;margin-bottom:8px}.filter[_ngcontent-%COMP%]{margin-bottom:-2.2em}.filter[_ngcontent-%COMP%]:after{content:\"o\";width:40px;color:transparent;font-size:2em;background-image:url('data:image/svg+xml;utf8,<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 512 512\"><path d=\"M0 64l192 192v192l128-32V256L512 64H0z\"/></svg>');background-repeat:no-repeat;background-position:center center;opacity:.2;top:-36px;left:calc(100% - 21px);position:relative}"] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(DualListComponent, [{
        type: Component,
        args: [{ selector: 'dual-list', template: "<div class=\"dual-list\">\r\n\t<div class=\"listbox\" [ngStyle]=\"{ 'order' :  direction() ? 1 : 2, 'margin-left' : direction() ? 0 : '10px' }\">\r\n\t\t<button type=\"button\" name=\"addBtn\" class=\"btn btn-primary btn-block\"\r\n\t\t\t(click)=\"moveItem(available, confirmed)\" [ngClass]=\"direction() ? 'point-right' : 'point-left'\"\r\n\t\t\t[disabled]=\"available.pick.length === 0\">{{format.add}}</button>\r\n\r\n\t\t<form *ngIf=\"filter\" class=\"filter\">\r\n\t\t\t<input class=\"form-control\" name=\"filterSource\" [(ngModel)]=\"available.picker\" (ngModelChange)=\"onFilter(available)\">\r\n\t\t</form>\r\n\r\n\t\t<div class=\"record-picker\">\r\n\t\t\t<ul [ngStyle]=\"{'max-height': height, 'min-height': height}\" [ngClass]=\"{over:available.dragOver}\"\r\n\t\t\t\t(drop)=\"drop($event, confirmed)\" (dragover)=\"allowDrop($event, available)\" (dragleave)=\"dragLeave()\">\r\n\t\t\t\t<li *ngFor=\"let item of available.sift; let idx=index;\"\r\n\t\t\t\t\t(click)=\"disabled ? null : selectItem(available.pick, item); shiftClick($event, idx, available, item)\"\r\n\t\t\t\t\t[ngClass]=\"{selected: isItemSelected(available.pick, item), disabled: disabled}\"\r\n\t\t\t\t\t[draggable]=\"!disabled && format.draggable\" (dragstart)=\"drag($event, item, available)\" (dragend)=\"dragEnd(available)\"\r\n\t\t\t\t><label>{{item._name}}</label></li>\r\n\t\t\t</ul>\r\n\t\t</div>\r\n\r\n\t\t<div class=\"button-bar\">\r\n\t\t\t<button type=\"button\" class=\"btn btn-primary pull-left\" (click)=\"selectAll(available)\"\r\n\t\t\t\t[disabled]=\"disabled || isAllSelected(available)\">{{format.all}}</button>\r\n\t\t\t<button type=\"button\" class=\"btn btn-default pull-right\" (click)=\"selectNone(available)\"\r\n\t\t\t\t[disabled]=\"!isAnySelected(available)\">{{format.none}}</button>\r\n\t\t</div>\r\n\t</div>\r\n\r\n\t<div class=\"listbox\" [ngStyle]=\"{ 'order' : direction() ? 2 : 1, 'margin-left' : direction() ? '10px' : 0 }\">\r\n\t\t<button type=\"button\" name=\"removeBtn\" class=\"btn btn-primary btn-block\"\r\n\t\t\t(click)=\"moveItem(confirmed, available)\" [ngClass]=\"direction() ? 'point-left' : 'point-right'\"\r\n\t\t\t[disabled]=\"confirmed.pick.length === 0\">{{format.remove}}</button>\r\n\r\n\t\t<form *ngIf=\"filter\" class=\"filter\">\r\n\t\t\t<input class=\"form-control\" name=\"filterDestination\" [(ngModel)]=\"confirmed.picker\" (ngModelChange)=\"onFilter(confirmed)\">\r\n\t\t</form>\r\n\r\n\t\t<div class=\"record-picker\">\r\n\t\t\t<ul [ngStyle]=\"{'max-height': height, 'min-height': height}\" [ngClass]=\"{over:confirmed.dragOver}\"\r\n\t\t\t\t(drop)=\"drop($event, available)\" (dragover)=\"allowDrop($event, confirmed)\" (dragleave)=\"dragLeave()\">\r\n\t\t\t\t<li #itmConf *ngFor=\"let item of confirmed.sift; let idx=index;\"\r\n\t\t\t\t\t(click)=\"disabled ? null : selectItem(confirmed.pick, item); shiftClick($event, idx, confirmed, item)\"\r\n\t\t\t\t\t[ngClass]=\"{selected: isItemSelected(confirmed.pick, item), disabled: disabled}\"\r\n\t\t\t\t\t[draggable]=\"!disabled && format.draggable\" (dragstart)=\"drag($event, item, confirmed)\" (dragend)=\"dragEnd(confirmed)\"\r\n\t\t\t\t><label>{{item._name}}</label></li>\r\n\t\t\t</ul>\r\n\t\t</div>\r\n\r\n\t\t<div class=\"button-bar\">\r\n\t\t\t<button type=\"button\" class=\"btn btn-primary pull-left\" (click)=\"selectAll(confirmed)\"\r\n\t\t\t\t[disabled]=\"disabled || isAllSelected(confirmed)\">{{format.all}}</button>\r\n\t\t\t<button type=\"button\" class=\"btn btn-default pull-right\" (click)=\"selectNone(confirmed)\"\r\n\t\t\t\t[disabled]=\"!isAnySelected(confirmed)\">{{format.none}}</button>\r\n\t\t</div>\r\n\t</div>\r\n</div>\r\n", styles: ["div.record-picker{overflow-x:hidden;overflow-y:auto;border:1px solid #ddd;border-radius:8px;position:relative;cursor:pointer}div.record-picker::-webkit-scrollbar{width:12px}div.record-picker::-webkit-scrollbar-button{width:0px;height:0px}div.record-picker{scrollbar-base-color:#337ab7;scrollbar-3dlight-color:#337ab7;scrollbar-highlight-color:#337ab7;scrollbar-track-color:#eee;scrollbar-arrow-color:gray;scrollbar-shadow-color:gray;scrollbar-dark-shadow-color:gray}div.record-picker::-webkit-scrollbar-track{background:#eee;box-shadow:0 0 3px #dfdfdf inset;border-top-right-radius:8px;border-bottom-right-radius:8px}div.record-picker::-webkit-scrollbar-thumb{background:#337ab7;border:thin solid gray;border-top-right-radius:8px;border-bottom-right-radius:8px}div.record-picker::-webkit-scrollbar-thumb:hover{background:#286090}.record-picker ul{margin:0;padding:0 0 1px}.record-picker li{border-top:thin solid #ddd;border-bottom:1px solid #ddd;display:block;padding:2px 2px 2px 10px;margin-bottom:-1px;font-size:.85em;cursor:pointer;white-space:nowrap;min-height:16px}.record-picker li:hover{background-color:#f5f5f5}.record-picker li.selected{background-color:#d9edf7}.record-picker li.selected:hover{background-color:#c4e3f3}.record-picker li.disabled{opacity:.5;cursor:default;background-color:inherit}.record-picker li:first-child{border-top-left-radius:8px;border-top-right-radius:8px;border-top:none}.record-picker li:last-child{border-bottom-left-radius:8px;border-bottom-right-radius:8px;border-bottom:none}.record-picker label{cursor:pointer;font-weight:inherit;font-size:14px;padding:4px;margin-bottom:-1px;-webkit-touch-callout:none;-webkit-user-select:none;-moz-user-select:none;user-select:none}.record-picker ul.over{background-color:#d3d3d3}.dual-list{display:flex;flex-direction:row;align-content:flex-start}.dual-list .listbox{width:50%;margin:0}.dual-list .button-bar{margin-top:8px}.point-right:after{content:\"\\25b6\";padding-left:1em}.point-left:before{content:\"\\25c0\";padding-right:1em}.dual-list .button-bar button{width:47%}button.btn-block{display:block;width:100%;margin-bottom:8px}.filter{margin-bottom:-2.2em}.filter:after{content:\"o\";width:40px;color:transparent;font-size:2em;background-image:url('data:image/svg+xml;utf8,<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 512 512\"><path d=\"M0 64l192 192v192l128-32V256L512 64H0z\"/></svg>');background-repeat:no-repeat;background-position:center center;opacity:.2;top:-36px;left:calc(100% - 21px);position:relative}\n"] }]
    }], function () { return [{ type: i0.IterableDiffers }]; }, { id: [{
            type: Input
        }], key: [{
            type: Input
        }], display: [{
            type: Input
        }], height: [{
            type: Input
        }], filter: [{
            type: Input
        }], format: [{
            type: Input
        }], sort: [{
            type: Input
        }], compare: [{
            type: Input
        }], disabled: [{
            type: Input
        }], source: [{
            type: Input
        }], destination: [{
            type: Input
        }], destinationChange: [{
            type: Output
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZHVhbC1saXN0LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3Byb2plY3RzL2FuZ3VsYXItZHVhbC1saXN0Ym94L3NyYy9saWIvZHVhbC1saXN0LmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uL3Byb2plY3RzL2FuZ3VsYXItZHVhbC1saXN0Ym94L3NyYy9saWIvZHVhbC1saXN0LmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQVcsWUFBWSxFQUFFLEtBQUssRUFDL0MsTUFBTSxFQUFnQixNQUFNLGVBQWUsQ0FBQztBQUU3QyxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sY0FBYyxDQUFDOzs7Ozs7SUNHdkMsZ0NBQW9DLGdCQUFBO0lBQ2Esd05BQThCLGlLQUFrQixpQ0FBbUIsSUFBckM7SUFBOUUsaUJBQXFILEVBQUE7OztJQUFyRSxlQUE4QjtJQUE5QixpREFBOEI7Ozs7O0lBTTdFLDhCQUlDO0lBSEEsd1FBQW9CLElBQUksR0FBRyxpREFBZ0MsU0FBRSw0REFBd0MsSUFBQyx1TkFFN0MsZ0RBQTZCLElBRmdCLGtKQUVILGtDQUFrQixJQUZmO0lBR3RHLDZCQUFPO0lBQUEsWUFBYztJQUFBLGlCQUFRLEVBQUE7Ozs7SUFGN0IsNEhBQWdGLDBEQUFBO0lBRXpFLGVBQWM7SUFBZCxtQ0FBYzs7OztJQWlCeEIsZ0NBQW9DLGdCQUFBO0lBQ2tCLDROQUE4QixvS0FBa0IsbUNBQW1CLElBQXJDO0lBQW5GLGlCQUEwSCxFQUFBOzs7SUFBckUsZUFBOEI7SUFBOUIsaURBQThCOzs7O0lBTWxGLGtDQUlDO0lBSEEsNlFBQW9CLElBQUksR0FBRyxvREFBZ0MsU0FBRSxnRUFBd0MsSUFBQyx5TkFFN0MsaURBQTZCLElBRmdCLG1KQUVILGtDQUFrQixJQUZmO0lBR3RHLDZCQUFPO0lBQUEsWUFBYztJQUFBLGlCQUFRLEVBQUE7Ozs7SUFGN0IsNkhBQWdGLDBE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O1FBQWYscUNBQWU7UUFJcEMsZUFBdUY7UUFBdkYsNEdBQXVGO1FBRWpFLGVBQXNEO1FBQXRELHdFQUFzRCw2Q0FBQTtRQUN0RCxlQUFpQjtRQUFqQix1Q0FBaUI7UUFFcEQsZUFBWTtRQUFaLGlDQUFZO1FBS2QsZUFBd0Q7UUFBeEQsNkVBQXdELGdFQUFBO1FBRTdCLGVBQW1CO1FBQW5CLDRDQUFtQjtRQVVqRCxlQUFpRDtRQUFqRCwyRUFBaUQ7UUFBQyxlQUFjO1FBQWQsb0NBQWM7UUFFaEUsZUFBc0M7UUFBdEMsNERBQXNDO1FBQUMsZUFBZTtRQUFmLHFDQUFlOzt1RkR0QzdDLGlCQUFpQjtjQU43QixTQUFTOzJCQUNDLFdBQVc7a0VBc0JaLEVBQUU7a0JBQVYsS0FBSztZQUNHLEdBQUc7a0JBQVgsS0FBSztZQUNHLE9BQU87a0JBQWYsS0FBSztZQUNHLE1BQU07a0JBQWQsS0FBSztZQUNHLE1BQU07a0JBQWQsS0FBSztZQUNHLE1BQU07a0JBQWQsS0FBSztZQUNHLElBQUk7a0JBQVosS0FBSztZQUNHLE9BQU87a0JBQWYsS0FBSztZQUNHLFFBQVE7a0JBQWhCLEtBQUs7WUFDRyxNQUFNO2tCQUFkLEtBQUs7WUFDRyxXQUFXO2tCQUFuQixLQUFLO1lBQ0ksaUJBQWlCO2tCQUExQixNQUFNIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBEb0NoZWNrLCBFdmVudEVtaXR0ZXIsIElucHV0LCBJdGVyYWJsZURpZmZlcnMsIE9uQ2hhbmdlcyxcclxuXHRPdXRwdXQsIFNpbXBsZUNoYW5nZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuaW1wb3J0IHsgQmFzaWNMaXN0IH0gZnJvbSAnLi9iYXNpYy1saXN0JztcclxuXHJcbmV4cG9ydCB0eXBlIGNvbXBhcmVGdW5jdGlvbiA9IChhOiBhbnksIGI6IGFueSkgPT4gbnVtYmVyO1xyXG5cclxudmFyIG5leHRJZCA9IDA7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuXHRzZWxlY3RvcjogJ2R1YWwtbGlzdCcsXHJcblx0dGVtcGxhdGVVcmw6ICcuL2R1YWwtbGlzdC5jb21wb25lbnQuaHRtbCcsXHJcblx0c3R5bGVVcmxzOiBbICcuL2R1YWwtbGlzdC5jb21wb25lbnQuY3NzJyBdXHJcbn0pXHJcblxyXG5leHBvcnQgY2xhc3MgRHVhbExpc3RDb21wb25lbnQgaW1wbGVtZW50cyBEb0NoZWNrLCBPbkNoYW5nZXMge1xyXG5cdHN0YXRpYyBBVkFJTEFCTEVfTElTVF9OQU1FID0gJ2F2YWlsYWJsZSc7XHJcblx0c3RhdGljIENPTkZJUk1FRF9MSVNUX05BTUUgPSAnY29uZmlybWVkJztcclxuXHJcblx0c3RhdGljIExUUiA9ICdsZWZ0LXRvLXJpZ2h0JztcclxuXHRzdGF0aWMgUlRMID0gJ3JpZ2h0LXRvLWxlZnQnO1xyXG5cclxuXHRzdGF0aWMgREVGQVVMVF9GT1JNQVQgPSB7XHJcblx0XHRhZGQ6ICdBZGQnLFxyXG5cdFx0cmVtb3ZlOiAnUmVtb3ZlJyxcclxuXHRcdGFsbDogJ0FsbCcsXHJcblx0XHRub25lOiAnTm9uZScsXHJcblx0XHRkaXJlY3Rpb246IER1YWxMaXN0Q29tcG9uZW50LkxUUixcclxuXHRcdGRyYWdnYWJsZTogdHJ1ZSxcclxuXHRcdGxvY2FsZTogdW5kZWZpbmVkXHJcblx0fTtcclxuXHJcblx0QElucHV0KCkgaWQgPSBgZHVhbC1saXN0LSR7bmV4dElkKyt9YDtcclxuXHRASW5wdXQoKSBrZXkgPSAnX2lkJztcclxuXHRASW5wdXQoKSBkaXNwbGF5OiBhbnkgPSAnX25hbWUnO1xyXG5cdEBJbnB1dCgpIGhlaWdodCA9ICcxMDBweCc7XHJcblx0QElucHV0KCkgZmlsdGVyID0gZmFsc2U7XHJcblx0QElucHV0KCkgZm9ybWF0ID0gRHVhbExpc3RDb21wb25lbnQuREVGQVVMVF9GT1JNQVQ7XHJcblx0QElucHV0KCkgc29ydCA9IGZhbHNlO1xyXG5cdEBJbnB1dCgpIGNvbXBhcmU6IGNvbXBhcmVGdW5jdGlvbjtcclxuXHRASW5wdXQoKSBkaXNhYmxlZCA9IGZhbHNlO1xyXG5cdEBJbnB1dCgpIHNvdXJjZTogQXJyYXk8YW55PjtcclxuXHRASW5wdXQoKSBkZXN0aW5hdGlvbjogQXJyYXk8YW55PjtcclxuXHRAT3V0cHV0KCkgZGVzdGluYXRpb25DaGFuZ2UgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XHJcblxyXG5cdGF2YWlsYWJsZTogQmFzaWNMaXN0O1xyXG5cdGNvbmZpcm1lZDogQmFzaWNMaXN0O1xyXG5cclxuXHRzb3VyY2VEaWZmZXI6IGFueTtcclxuXHRkZXN0aW5hdGlvbkRpZmZlcjogYW55O1xyXG5cclxuXHRwcml2YXRlIHNvcnRlciA9IChhOiBhbnksIGI6IGFueSkgPT4geyByZXR1cm4gKGEuX25hbWUgPCBiLl9uYW1lKSA/IC0xIDogKChhLl9uYW1lID4gYi5fbmFtZSkgPyAxIDogMCk7IH07XHJcblxyXG5cdGNvbnN0cnVjdG9yKHByaXZhdGUgZGlmZmVyczogSXRlcmFibGVEaWZmZXJzKSB7XHJcblx0XHR0aGlzLmF2YWlsYWJsZSA9IG5ldyBCYXNpY0xpc3QoRHVhbExpc3RDb21wb25lbnQuQVZBSUxBQkxFX0xJU1RfTkFNRSk7XHJcblx0XHR0aGlzLmNvbmZpcm1lZCA9IG5ldyBCYXNpY0xpc3QoRHVhbExpc3RDb21wb25lbnQuQ09ORklSTUVEX0xJU1RfTkFNRSk7XHJcblx0fVxyXG5cclxuXHRuZ09uQ2hhbmdlcyhjaGFuZ2VSZWNvcmQ6IHtba2V5OiBzdHJpbmddOiBTaW1wbGVDaGFuZ2V9KSB7XHJcblx0XHRpZiAoY2hhbmdlUmVjb3JkWydmaWx0ZXInXSkge1xyXG5cdFx0XHRpZiAoY2hhbmdlUmVjb3JkWydmaWx0ZXInXS5jdXJyZW50VmFsdWUgPT09IGZhbHNlKSB7XHJcblx0XHRcdFx0dGhpcy5jbGVhckZpbHRlcih0aGlzLmF2YWlsYWJsZSk7XHJcblx0XHRcdFx0dGhpcy5jbGVhckZpbHRlcih0aGlzLmNvbmZpcm1lZCk7XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHJcblx0XHRpZiAoY2hhbmdlUmVjb3JkWydzb3J0J10pIHtcclxuXHRcdFx0aWYgKGNoYW5nZVJlY29yZFsnc29ydCddLmN1cnJlbnRWYWx1ZSA9PT0gdHJ1ZSAmJiB0aGlzLmNvbXBhcmUgPT09IHVuZGVmaW5lZCkge1xyXG5cdFx0XHRcdHRoaXMuY29tcGFyZSA9IHRoaXMuc29ydGVyO1xyXG5cdFx0XHR9IGVsc2UgaWYgKGNoYW5nZVJlY29yZFsnc29ydCddLmN1cnJlbnRWYWx1ZSA9PT0gZmFsc2UpIHtcclxuXHRcdFx0XHR0aGlzLmNvbXBhcmUgPSB1bmRlZmluZWQ7XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHJcblx0XHRpZiAoY2hhbmdlUmVjb3JkWydmb3JtYXQnXSkge1xyXG5cdFx0XHR0aGlzLmZvcm1hdCA9IGNoYW5nZVJlY29yZFsnZm9ybWF0J10uY3VycmVudFZhbHVlO1xyXG5cclxuXHRcdFx0aWYgKHR5cGVvZih0aGlzLmZvcm1hdC5kaXJlY3Rpb24pID09PSAndW5kZWZpbmVkJykge1xyXG5cdFx0XHRcdHRoaXMuZm9ybWF0LmRpcmVjdGlvbiA9IER1YWxMaXN0Q29tcG9uZW50LkxUUjtcclxuXHRcdFx0fVxyXG5cclxuXHRcdFx0aWYgKHR5cGVvZih0aGlzLmZvcm1hdC5hZGQpID09PSAndW5kZWZpbmVkJykge1xyXG5cdFx0XHRcdHRoaXMuZm9ybWF0LmFkZCA9IER1YWxMaXN0Q29tcG9uZW50LkRFRkFVTFRfRk9STUFULmFkZDtcclxuXHRcdFx0fVxyXG5cclxuXHRcdFx0aWYgKHR5cGVvZih0aGlzLmZvcm1hdC5yZW1vdmUpID09PSAndW5kZWZpbmVkJykge1xyXG5cdFx0XHRcdHRoaXMuZm9ybWF0LnJlbW92ZSA9IER1YWxMaXN0Q29tcG9uZW50LkRFRkFVTFRfRk9STUFULnJlbW92ZTtcclxuXHRcdFx0fVxyXG5cclxuXHRcdFx0aWYgKHR5cGVvZih0aGlzLmZvcm1hdC5hbGwpID09PSAndW5kZWZpbmVkJykge1xyXG5cdFx0XHRcdHRoaXMuZm9ybWF0LmFsbCA9IER1YWxMaXN0Q29tcG9uZW50LkRFRkFVTFRfRk9STUFULmFsbDtcclxuXHRcdFx0fVxyXG5cclxuXHRcdFx0aWYgKHR5cGVvZih0aGlzLmZvcm1hdC5ub25lKSA9PT0gJ3VuZGVmaW5lZCcpIHtcclxuXHRcdFx0XHR0aGlzLmZvcm1hdC5ub25lID0gRHVhbExpc3RDb21wb25lbnQuREVGQVVMVF9GT1JNQVQubm9uZTtcclxuXHRcdFx0fVxyXG5cclxuXHRcdFx0aWYgKHR5cGVvZih0aGlzLmZvcm1hdC5kcmFnZ2FibGUpID09PSAndW5kZWZpbmVkJykge1xyXG5cdFx0XHRcdHRoaXMuZm9ybWF0LmRyYWdnYWJsZSA9IER1YWxMaXN0Q29tcG9uZW50LkRFRkFVTFRfRk9STUFULmRyYWdnYWJsZTtcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cclxuXHRcdGlmIChjaGFuZ2VSZWNvcmRbJ3NvdXJjZSddKSB7XHJcblx0XHRcdHRoaXMuYXZhaWxhYmxlID0gbmV3IEJhc2ljTGlzdChEdWFsTGlzdENvbXBvbmVudC5BVkFJTEFCTEVfTElTVF9OQU1FKTtcclxuXHRcdFx0dGhpcy51cGRhdGVkU291cmNlKCk7XHJcblx0XHRcdHRoaXMudXBkYXRlZERlc3RpbmF0aW9uKCk7XHJcblx0XHR9XHJcblxyXG5cdFx0aWYgKGNoYW5nZVJlY29yZFsnZGVzdGluYXRpb24nXSkge1xyXG5cdFx0XHR0aGlzLmNvbmZpcm1lZCA9IG5ldyBCYXNpY0xpc3QoRHVhbExpc3RDb21wb25lbnQuQ09ORklSTUVEX0xJU1RfTkFNRSk7XHJcblx0XHRcdHRoaXMudXBkYXRlZERlc3RpbmF0aW9uKCk7XHJcblx0XHRcdHRoaXMudXBkYXRlZFNvdXJjZSgpO1xyXG5cdFx0fVxyXG5cdH1cclxuXHJcblx0bmdEb0NoZWNrKCkge1xyXG5cdFx0aWYgKHRoaXMuc291cmNlICYmIHRoaXMuYnVpbGRBdmFpbGFibGUodGhpcy5zb3VyY2UpKSB7XHJcblx0XHRcdHRoaXMub25GaWx0ZXIodGhpcy5hdmFpbGFibGUpO1xyXG5cdFx0fVxyXG5cdFx0aWYgKHRoaXMuZGVzdGluYXRpb24gJiYgdGhpcy5idWlsZENvbmZpcm1lZCh0aGlzLmRlc3RpbmF0aW9uKSkge1xyXG5cdFx0XHR0aGlzLm9uRmlsdGVyKHRoaXMuY29uZmlybWVkKTtcclxuXHRcdH1cclxuXHR9XHJcblxyXG5cdGJ1aWxkQXZhaWxhYmxlKHNvdXJjZTogQXJyYXk8YW55Pik6IGJvb2xlYW4ge1xyXG5cdFx0Y29uc3Qgc291cmNlQ2hhbmdlcyA9IHRoaXMuc291cmNlRGlmZmVyLmRpZmYoc291cmNlKTtcclxuXHRcdGlmIChzb3VyY2VDaGFuZ2VzKSB7XHJcblx0XHRcdHNvdXJjZUNoYW5nZXMuZm9yRWFjaFJlbW92ZWRJdGVtKChyOiBhbnkpID0+IHtcclxuXHRcdFx0XHRjb25zdCBpZHggPSB0aGlzLmZpbmRJdGVtSW5kZXgodGhpcy5hdmFpbGFibGUubGlzdCwgci5pdGVtLCB0aGlzLmtleSk7XHJcblx0XHRcdFx0aWYgKGlkeCAhPT0gLTEpIHtcclxuXHRcdFx0XHRcdHRoaXMuYXZhaWxhYmxlLmxpc3Quc3BsaWNlKGlkeCwgMSk7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9KTtcclxuXHJcblx0XHRcdHNvdXJjZUNoYW5nZXMuZm9yRWFjaEFkZGVkSXRlbSgocjogYW55KSA9PiB7XHJcblx0XHRcdFx0Ly8gRG8gbm90IGFkZCBkdXBsaWNhdGVzIGV2ZW4gaWYgc291cmNlIGhhcyBkdXBsaWNhdGVzLlxyXG5cdFx0XHRcdGlmICh0aGlzLmZpbmRJdGVtSW5kZXgodGhpcy5hdmFpbGFibGUubGlzdCwgci5pdGVtLCB0aGlzLmtleSkgPT09IC0xKSB7XHJcblx0XHRcdFx0XHR0aGlzLmF2YWlsYWJsZS5saXN0LnB1c2goIHsgX2lkOiB0aGlzLm1ha2VJZChyLml0ZW0pLCBfbmFtZTogdGhpcy5tYWtlTmFtZShyLml0ZW0pIH0pO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0fSk7XHJcblxyXG5cdFx0XHRpZiAodGhpcy5jb21wYXJlICE9PSB1bmRlZmluZWQpIHtcclxuXHRcdFx0XHR0aGlzLmF2YWlsYWJsZS5saXN0LnNvcnQodGhpcy5jb21wYXJlKTtcclxuXHRcdFx0fVxyXG5cdFx0XHR0aGlzLmF2YWlsYWJsZS5zaWZ0ID0gdGhpcy5hdmFpbGFibGUubGlzdDtcclxuXHJcblx0XHRcdHJldHVybiB0cnVlO1xyXG5cdFx0fVxyXG5cdFx0cmV0dXJuIGZhbHNlO1xyXG5cdH1cclxuXHJcblx0YnVpbGRDb25maXJtZWQoZGVzdGluYXRpb246IEFycmF5PGFueT4pOiBib29sZWFuIHtcclxuXHRcdGxldCBtb3ZlZCA9IGZhbHNlO1xyXG5cdFx0Y29uc3QgZGVzdENoYW5nZXMgPSB0aGlzLmRlc3RpbmF0aW9uRGlmZmVyLmRpZmYoZGVzdGluYXRpb24pO1xyXG5cdFx0aWYgKGRlc3RDaGFuZ2VzKSB7XHJcblx0XHRcdGRlc3RDaGFuZ2VzLmZvckVhY2hSZW1vdmVkSXRlbSgocjogYW55KSA9PiB7XHJcblx0XHRcdFx0Y29uc3QgaWR4ID0gdGhpcy5maW5kSXRlbUluZGV4KHRoaXMuY29uZmlybWVkLmxpc3QsIHIuaXRlbSwgdGhpcy5rZXkpO1xyXG5cdFx0XHRcdGlmIChpZHggIT09IC0xKSB7XHJcblx0XHRcdFx0XHRpZiAoIXRoaXMuaXNJdGVtU2VsZWN0ZWQodGhpcy5jb25maXJtZWQucGljaywgdGhpcy5jb25maXJtZWQubGlzdFtpZHhdKSkge1xyXG5cdFx0XHRcdFx0XHR0aGlzLnNlbGVjdEl0ZW0odGhpcy5jb25maXJtZWQucGljaywgdGhpcy5jb25maXJtZWQubGlzdFtpZHhdKTtcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdHRoaXMubW92ZUl0ZW0odGhpcy5jb25maXJtZWQsIHRoaXMuYXZhaWxhYmxlLCB0aGlzLmNvbmZpcm1lZC5saXN0W2lkeF0sIGZhbHNlKTtcclxuXHRcdFx0XHRcdG1vdmVkID0gdHJ1ZTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdH0pO1xyXG5cclxuXHRcdFx0ZGVzdENoYW5nZXMuZm9yRWFjaEFkZGVkSXRlbSgocjogYW55KSA9PiB7XHJcblx0XHRcdFx0Y29uc3QgaWR4ID0gdGhpcy5maW5kSXRlbUluZGV4KHRoaXMuYXZhaWxhYmxlLmxpc3QsIHIuaXRlbSwgdGhpcy5rZXkpO1xyXG5cdFx0XHRcdGlmIChpZHggIT09IC0xKSB7XHJcblx0XHRcdFx0XHRpZiAoIXRoaXMuaXNJdGVtU2VsZWN0ZWQodGhpcy5hdmFpbGFibGUucGljaywgdGhpcy5hdmFpbGFibGUubGlzdFtpZHhdKSkge1xyXG5cdFx0XHRcdFx0XHR0aGlzLnNlbGVjdEl0ZW0odGhpcy5hdmFpbGFibGUucGljaywgdGhpcy5hdmFpbGFibGUubGlzdFtpZHhdKTtcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdHRoaXMubW92ZUl0ZW0odGhpcy5hdmFpbGFibGUsIHRoaXMuY29uZmlybWVkLCB0aGlzLmF2YWlsYWJsZS5saXN0W2lkeF0sIGZhbHNlKTtcclxuXHRcdFx0XHRcdG1vdmVkID0gdHJ1ZTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdH0pO1xyXG5cclxuXHRcdFx0aWYgKHRoaXMuY29tcGFyZSAhPT0gdW5kZWZpbmVkKSB7XHJcblx0XHRcdFx0dGhpcy5jb25maXJtZWQubGlzdC5zb3J0KHRoaXMuY29tcGFyZSk7XHJcblx0XHRcdH1cclxuXHRcdFx0dGhpcy5jb25maXJtZWQuc2lmdCA9IHRoaXMuY29uZmlybWVkLmxpc3Q7XHJcblxyXG5cdFx0XHRpZiAobW92ZWQpIHtcclxuXHRcdFx0XHR0aGlzLnRydWVVcCgpO1xyXG5cdFx0XHR9XHJcblx0XHRcdHJldHVybiB0cnVlO1xyXG5cdFx0fVxyXG5cdFx0cmV0dXJuIGZhbHNlO1xyXG5cdH1cclxuXHJcblx0dXBkYXRlZFNvdXJjZSgpIHtcclxuXHRcdHRoaXMuYXZhaWxhYmxlLmxpc3QubGVuZ3RoID0gMDtcclxuXHRcdHRoaXMuYXZhaWxhYmxlLnBpY2subGVuZ3RoID0gMDtcclxuXHJcblx0XHRpZiAodGhpcy5zb3VyY2UgIT09IHVuZGVmaW5lZCkge1xyXG5cdFx0XHR0aGlzLnNvdXJjZURpZmZlciA9IHRoaXMuZGlmZmVycy5maW5kKHRoaXMuc291cmNlKS5jcmVhdGUobnVsbCk7XHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHR1cGRhdGVkRGVzdGluYXRpb24oKSB7XHJcblx0XHRpZiAodGhpcy5kZXN0aW5hdGlvbiAhPT0gdW5kZWZpbmVkKSB7XHJcblx0XHRcdHRoaXMuZGVzdGluYXRpb25EaWZmZXIgPSB0aGlzLmRpZmZlcnMuZmluZCh0aGlzLmRlc3RpbmF0aW9uKS5jcmVhdGUobnVsbCk7XHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHRkaXJlY3Rpb24oKSB7XHJcblx0XHRyZXR1cm4gdGhpcy5mb3JtYXQuZGlyZWN0aW9uID09PSBEdWFsTGlzdENvbXBvbmVudC5MVFI7XHJcblx0fVxyXG5cclxuXHRkcmFnRW5kKGxpc3Q6IEJhc2ljTGlzdCA9IG51bGwpOiBib29sZWFuIHtcclxuXHRcdGlmIChsaXN0KSB7XHJcblx0XHRcdGxpc3QuZHJhZ1N0YXJ0ID0gZmFsc2U7XHJcblx0XHR9IGVsc2Uge1xyXG5cdFx0XHR0aGlzLmF2YWlsYWJsZS5kcmFnU3RhcnQgPSBmYWxzZTtcclxuXHRcdFx0dGhpcy5jb25maXJtZWQuZHJhZ1N0YXJ0ID0gZmFsc2U7XHJcblx0XHR9XHJcblx0XHRyZXR1cm4gZmFsc2U7XHJcblx0fVxyXG5cclxuXHRkcmFnKGV2ZW50OiBEcmFnRXZlbnQsIGl0ZW06IGFueSwgbGlzdDogQmFzaWNMaXN0KSB7XHJcblx0XHRpZiAoIXRoaXMuaXNJdGVtU2VsZWN0ZWQobGlzdC5waWNrLCBpdGVtKSkge1xyXG5cdFx0XHR0aGlzLnNlbGVjdEl0ZW0obGlzdC5waWNrLCBpdGVtKTtcclxuXHRcdH1cclxuXHRcdGxpc3QuZHJhZ1N0YXJ0ID0gdHJ1ZTtcclxuXHJcblx0XHQvLyBTZXQgYSBjdXN0b20gdHlwZSB0byBiZSB0aGlzIGR1YWwtbGlzdCdzIGlkLlxyXG5cdFx0ZXZlbnQuZGF0YVRyYW5zZmVyLnNldERhdGEodGhpcy5pZCwgaXRlbVsnX2lkJ10pO1xyXG5cdH1cclxuXHJcblx0YWxsb3dEcm9wKGV2ZW50OiBEcmFnRXZlbnQsIGxpc3Q6IEJhc2ljTGlzdCk6IGJvb2xlYW4ge1xyXG5cdFx0aWYgKGV2ZW50LmRhdGFUcmFuc2Zlci50eXBlcy5sZW5ndGggJiYgKGV2ZW50LmRhdGFUcmFuc2Zlci50eXBlc1swXSA9PT0gdGhpcy5pZCkpIHtcclxuXHRcdFx0ZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuXHRcdFx0aWYgKCFsaXN0LmRyYWdTdGFydCkge1xyXG5cdFx0XHRcdGxpc3QuZHJhZ092ZXIgPSB0cnVlO1xyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0XHRyZXR1cm4gZmFsc2U7XHJcblx0fVxyXG5cclxuXHRkcmFnTGVhdmUoKSB7XHJcblx0XHR0aGlzLmF2YWlsYWJsZS5kcmFnT3ZlciA9IGZhbHNlO1xyXG5cdFx0dGhpcy5jb25maXJtZWQuZHJhZ092ZXIgPSBmYWxzZTtcclxuXHR9XHJcblxyXG5cdGRyb3AoZXZlbnQ6IERyYWdFdmVudCwgbGlzdDogQmFzaWNMaXN0KSB7XHJcblx0XHRpZiAoZXZlbnQuZGF0YVRyYW5zZmVyLnR5cGVzLmxlbmd0aCAmJiAoZXZlbnQuZGF0YVRyYW5zZmVyLnR5cGVzWzBdID09PSB0aGlzLmlkKSkge1xyXG5cdFx0XHRldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cdFx0XHR0aGlzLmRyYWdMZWF2ZSgpO1xyXG5cdFx0XHR0aGlzLmRyYWdFbmQoKTtcclxuXHJcblx0XHRcdGlmIChsaXN0ID09PSB0aGlzLmF2YWlsYWJsZSkge1xyXG5cdFx0XHRcdHRoaXMubW92ZUl0ZW0odGhpcy5hdmFpbGFibGUsIHRoaXMuY29uZmlybWVkKTtcclxuXHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHR0aGlzLm1vdmVJdGVtKHRoaXMuY29uZmlybWVkLCB0aGlzLmF2YWlsYWJsZSk7XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHR9XHJcblxyXG5cdHByaXZhdGUgdHJ1ZVVwKCkge1xyXG5cdFx0bGV0IGNoYW5nZWQgPSBmYWxzZTtcclxuXHJcblx0XHQvLyBDbGVhciByZW1vdmVkIGl0ZW1zLlxyXG5cdFx0bGV0IHBvcyA9IHRoaXMuZGVzdGluYXRpb24ubGVuZ3RoO1xyXG5cdFx0d2hpbGUgKChwb3MgLT0gMSkgPj0gMCkge1xyXG5cdFx0XHRjb25zdCBtdiA9IHRoaXMuY29uZmlybWVkLmxpc3QuZmlsdGVyKCBjb25mID0+IHtcclxuXHRcdFx0XHRpZiAodHlwZW9mIHRoaXMuZGVzdGluYXRpb25bcG9zXSA9PT0gJ29iamVjdCcpIHtcclxuXHRcdFx0XHRcdHJldHVybiBjb25mLl9pZCA9PT0gdGhpcy5kZXN0aW5hdGlvbltwb3NdW3RoaXMua2V5XTtcclxuXHRcdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdFx0cmV0dXJuIGNvbmYuX2lkID09PSB0aGlzLmRlc3RpbmF0aW9uW3Bvc107XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9KTtcclxuXHRcdFx0aWYgKG12Lmxlbmd0aCA9PT0gMCkge1xyXG5cdFx0XHRcdC8vIE5vdCBmb3VuZCBzbyByZW1vdmUuXHJcblx0XHRcdFx0dGhpcy5kZXN0aW5hdGlvbi5zcGxpY2UocG9zLCAxKTtcclxuXHRcdFx0XHRjaGFuZ2VkID0gdHJ1ZTtcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cclxuXHRcdC8vIFB1c2ggYWRkZWQgaXRlbXMuXHJcblx0XHRmb3IgKGxldCBpID0gMCwgbGVuID0gdGhpcy5jb25maXJtZWQubGlzdC5sZW5ndGg7IGkgPCBsZW47IGkgKz0gMSkge1xyXG5cdFx0XHRsZXQgbXYgPSB0aGlzLmRlc3RpbmF0aW9uLmZpbHRlciggKGQ6IGFueSkgPT4ge1xyXG5cdFx0XHRcdGlmICh0eXBlb2YgZCA9PT0gJ29iamVjdCcpIHtcclxuXHRcdFx0XHRcdHJldHVybiAoZFt0aGlzLmtleV0gPT09IHRoaXMuY29uZmlybWVkLmxpc3RbaV0uX2lkKTtcclxuXHRcdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdFx0cmV0dXJuIChkID09PSB0aGlzLmNvbmZpcm1lZC5saXN0W2ldLl9pZCk7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9KTtcclxuXHJcblx0XHRcdGlmIChtdi5sZW5ndGggPT09IDApIHtcclxuXHRcdFx0XHQvLyBOb3QgZm91bmQgc28gYWRkLlxyXG5cdFx0XHRcdG12ID0gdGhpcy5zb3VyY2UuZmlsdGVyKCAobzogYW55KSA9PiB7XHJcblx0XHRcdFx0XHRpZiAodHlwZW9mIG8gPT09ICdvYmplY3QnKSB7XHJcblx0XHRcdFx0XHRcdHJldHVybiAob1t0aGlzLmtleV0gPT09IHRoaXMuY29uZmlybWVkLmxpc3RbaV0uX2lkKTtcclxuXHRcdFx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0XHRcdHJldHVybiAobyA9PT0gdGhpcy5jb25maXJtZWQubGlzdFtpXS5faWQpO1xyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdH0pO1xyXG5cclxuXHRcdFx0XHRpZiAobXYubGVuZ3RoID4gMCkge1xyXG5cdFx0XHRcdFx0dGhpcy5kZXN0aW5hdGlvbi5wdXNoKG12WzBdKTtcclxuXHRcdFx0XHRcdGNoYW5nZWQgPSB0cnVlO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cclxuXHRcdGlmIChjaGFuZ2VkKSB7XHJcblx0XHRcdHRoaXMuZGVzdGluYXRpb25DaGFuZ2UuZW1pdCh0aGlzLmRlc3RpbmF0aW9uKTtcclxuXHRcdH1cclxuXHR9XHJcblxyXG5cdGZpbmRJdGVtSW5kZXgobGlzdDogQXJyYXk8YW55PiwgaXRlbTogYW55LCBrZXk6IGFueSA9ICdfaWQnKSB7XHJcblx0XHRsZXQgaWR4ID0gLTE7XHJcblxyXG5cdFx0ZnVuY3Rpb24gbWF0Y2hPYmplY3QoZTogYW55KSB7XHJcblx0XHRcdGlmIChlLl9pZCA9PT0gaXRlbVtrZXldKSB7XHJcblx0XHRcdFx0aWR4ID0gbGlzdC5pbmRleE9mKGUpO1xyXG5cdFx0XHRcdHJldHVybiB0cnVlO1xyXG5cdFx0XHR9XHJcblx0XHRcdHJldHVybiBmYWxzZTtcclxuXHRcdH1cclxuXHJcblx0XHRmdW5jdGlvbiBtYXRjaChlOiBhbnkpIHtcclxuXHRcdFx0aWYgKGUuX2lkID09PSBpdGVtKSB7XHJcblx0XHRcdFx0aWR4ID0gbGlzdC5pbmRleE9mKGUpO1xyXG5cdFx0XHRcdHJldHVybiB0cnVlO1xyXG5cdFx0XHR9XHJcblx0XHRcdHJldHVybiBmYWxzZTtcclxuXHRcdH1cclxuXHJcblx0XHQvLyBBc3N1bXB0aW9uIGlzIHRoYXQgdGhlIGFycmF5cyBkbyBub3QgaGF2ZSBkdXBsaWNhdGVzLlxyXG5cdFx0aWYgKHR5cGVvZiBpdGVtID09PSAnb2JqZWN0Jykge1xyXG5cdFx0XHRsaXN0LmZpbHRlcihtYXRjaE9iamVjdCk7XHJcblx0XHR9IGVsc2Uge1xyXG5cdFx0XHRsaXN0LmZpbHRlcihtYXRjaCk7XHJcblx0XHR9XHJcblxyXG5cdFx0cmV0dXJuIGlkeDtcclxuXHR9XHJcblxyXG5cdHByaXZhdGUgbWFrZVVuYXZhaWxhYmxlKHNvdXJjZTogQmFzaWNMaXN0LCBpdGVtOiBhbnkpIHtcclxuXHRcdGNvbnN0IGlkeCA9IHNvdXJjZS5saXN0LmluZGV4T2YoaXRlbSk7XHJcblx0XHRpZiAoaWR4ICE9PSAtMSkge1xyXG5cdFx0XHRzb3VyY2UubGlzdC5zcGxpY2UoaWR4LCAxKTtcclxuXHRcdH1cclxuXHR9XHJcblxyXG5cdG1vdmVJdGVtKHNvdXJjZTogQmFzaWNMaXN0LCB0YXJnZXQ6IEJhc2ljTGlzdCwgaXRlbTogYW55ID0gbnVsbCwgdHJ1ZXVwID0gdHJ1ZSkge1xyXG5cdFx0bGV0IGkgPSAwO1xyXG5cdFx0bGV0IGxlbiA9IHNvdXJjZS5waWNrLmxlbmd0aDtcclxuXHJcblx0XHRpZiAoaXRlbSkge1xyXG5cdFx0XHRpID0gc291cmNlLmxpc3QuaW5kZXhPZihpdGVtKTtcclxuXHRcdFx0bGVuID0gaSArIDE7XHJcblx0XHR9XHJcblxyXG5cdFx0Zm9yICg7IGkgPCBsZW47IGkgKz0gMSkge1xyXG5cdFx0XHQvLyBJcyB0aGUgcGljayBzdGlsbCBpbiBsaXN0P1xyXG5cdFx0XHRsZXQgbXY6IEFycmF5PGFueT4gPSBbXTtcclxuXHRcdFx0aWYgKGl0ZW0pIHtcclxuXHRcdFx0XHRjb25zdCBpZHggPSB0aGlzLmZpbmRJdGVtSW5kZXgoc291cmNlLnBpY2ssIGl0ZW0pO1xyXG5cdFx0XHRcdGlmIChpZHggIT09IC0xKSB7XHJcblx0XHRcdFx0XHRtdlswXSA9IHNvdXJjZS5waWNrW2lkeF07XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdG12ID0gc291cmNlLmxpc3QuZmlsdGVyKCBzcmMgPT4ge1xyXG5cdFx0XHRcdFx0cmV0dXJuIChzcmMuX2lkID09PSBzb3VyY2UucGlja1tpXS5faWQpO1xyXG5cdFx0XHRcdH0pO1xyXG5cdFx0XHR9XHJcblxyXG5cdFx0XHQvLyBTaG91bGQgb25seSBldmVyIGJlIDFcclxuXHRcdFx0aWYgKG12Lmxlbmd0aCA9PT0gMSkge1xyXG5cdFx0XHRcdC8vIEFkZCBpZiBub3QgYWxyZWFkeSBpbiB0YXJnZXQuXHJcblx0XHRcdFx0aWYgKHRhcmdldC5saXN0LmZpbHRlcih0cmcgPT4gdHJnLl9pZCA9PT0gbXZbMF0uX2lkKS5sZW5ndGggPT09IDApIHtcclxuXHRcdFx0XHRcdHRhcmdldC5saXN0LnB1c2goIG12WzBdICk7XHJcblx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHR0aGlzLm1ha2VVbmF2YWlsYWJsZShzb3VyY2UsIG12WzBdKTtcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cclxuXHRcdGlmICh0aGlzLmNvbXBhcmUgIT09IHVuZGVmaW5lZCkge1xyXG5cdFx0XHR0YXJnZXQubGlzdC5zb3J0KHRoaXMuY29tcGFyZSk7XHJcblx0XHR9XHJcblxyXG5cdFx0c291cmNlLnBpY2subGVuZ3RoID0gMDtcclxuXHJcblx0XHQvLyBVcGRhdGUgZGVzdGluYXRpb25cclxuXHRcdGlmICh0cnVldXApIHtcclxuXHRcdFx0dGhpcy50cnVlVXAoKTtcclxuXHRcdH1cclxuXHJcblx0XHQvLyBEZWxheSBldmVyLXNvLXNsaWdodGx5IHRvIHByZXZlbnQgcmFjZSBjb25kaXRpb24uXHJcblx0XHRzZXRUaW1lb3V0KCAoKSA9PiB7XHJcblx0XHRcdHRoaXMub25GaWx0ZXIoc291cmNlKTtcclxuXHRcdFx0dGhpcy5vbkZpbHRlcih0YXJnZXQpO1xyXG5cdFx0fSwgMTApO1xyXG5cdH1cclxuXHJcblx0aXNJdGVtU2VsZWN0ZWQobGlzdDogQXJyYXk8YW55PiwgaXRlbTogYW55KTogYm9vbGVhbiB7XHJcblx0XHRpZiAobGlzdC5maWx0ZXIoZSA9PiBPYmplY3QuaXMoZSwgaXRlbSkpLmxlbmd0aCA+IDApIHtcclxuXHRcdFx0cmV0dXJuIHRydWU7XHJcblx0XHR9XHJcblx0XHRyZXR1cm4gZmFsc2U7XHJcblx0fVxyXG5cclxuXHRzaGlmdENsaWNrKGV2ZW50OiBNb3VzZUV2ZW50LCBpbmRleDogbnVtYmVyLCBzb3VyY2U6IEJhc2ljTGlzdCwgaXRlbTogYW55KSB7XHJcblx0XHRpZiAoZXZlbnQuc2hpZnRLZXkgJiYgc291cmNlLmxhc3QgJiYgIU9iamVjdC5pcyhpdGVtLCBzb3VyY2UubGFzdCkpIHtcclxuXHRcdFx0Y29uc3QgaWR4ID0gc291cmNlLnNpZnQuaW5kZXhPZihzb3VyY2UubGFzdCk7XHJcblx0XHRcdGlmIChpbmRleCA+IGlkeCkge1xyXG5cdFx0XHRcdGZvciAobGV0IGkgPSAoaWR4ICsgMSk7IGkgPCBpbmRleDsgaSArPSAxKSB7XHJcblx0XHRcdFx0XHR0aGlzLnNlbGVjdEl0ZW0oc291cmNlLnBpY2ssIHNvdXJjZS5zaWZ0W2ldKTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdH0gZWxzZSBpZiAoaWR4ICE9PSAtMSkge1xyXG5cdFx0XHRcdGZvciAobGV0IGkgPSAoaW5kZXggKyAxKTsgaSA8IGlkeDsgaSArPSAxKSAge1xyXG5cdFx0XHRcdFx0dGhpcy5zZWxlY3RJdGVtKHNvdXJjZS5waWNrLCBzb3VyY2Uuc2lmdFtpXSk7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0XHRzb3VyY2UubGFzdCA9IGl0ZW07XHJcblx0fVxyXG5cclxuXHRzZWxlY3RJdGVtKGxpc3Q6IEFycmF5PGFueT4sIGl0ZW06IGFueSkge1xyXG5cdFx0Y29uc3QgcGsgPSBsaXN0LmZpbHRlciggKGU6IGFueSkgPT4ge1xyXG5cdFx0XHRyZXR1cm4gT2JqZWN0LmlzKGUsIGl0ZW0pO1xyXG5cdFx0fSk7XHJcblx0XHRpZiAocGsubGVuZ3RoID4gMCkge1xyXG5cdFx0XHQvLyBBbHJlYWR5IGluIGxpc3QsIHNvIGRlc2VsZWN0LlxyXG5cdFx0XHRmb3IgKGxldCBpID0gMCwgbGVuID0gcGsubGVuZ3RoOyBpIDwgbGVuOyBpICs9IDEpIHtcclxuXHRcdFx0XHRjb25zdCBpZHggPSBsaXN0LmluZGV4T2YocGtbaV0pO1xyXG5cdFx0XHRcdGlmIChpZHggIT09IC0xKSB7XHJcblx0XHRcdFx0XHRsaXN0LnNwbGljZShpZHgsIDEpO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0fVxyXG5cdFx0fSBlbHNlIHtcclxuXHRcdFx0bGlzdC5wdXNoKGl0ZW0pO1xyXG5cdFx0fVxyXG5cdH1cclxuXHJcblx0c2VsZWN0QWxsKHNvdXJjZTogQmFzaWNMaXN0KSB7XHJcblx0XHRzb3VyY2UucGljay5sZW5ndGggPSAwO1xyXG5cdFx0c291cmNlLnBpY2sgPSBzb3VyY2Uuc2lmdC5zbGljZSgwKTtcclxuXHR9XHJcblxyXG5cdHNlbGVjdE5vbmUoc291cmNlOiBCYXNpY0xpc3QpIHtcclxuXHRcdHNvdXJjZS5waWNrLmxlbmd0aCA9IDA7XHJcblx0fVxyXG5cclxuXHRpc0FsbFNlbGVjdGVkKHNvdXJjZTogQmFzaWNMaXN0KTogYm9vbGVhbiB7XHJcblx0XHRpZiAoc291cmNlLmxpc3QubGVuZ3RoID09PSAwIHx8IHNvdXJjZS5saXN0Lmxlbmd0aCA9PT0gc291cmNlLnBpY2subGVuZ3RoKSB7XHJcblx0XHRcdHJldHVybiB0cnVlO1xyXG5cdFx0fVxyXG5cdFx0cmV0dXJuIGZhbHNlO1xyXG5cdH1cclxuXHJcblx0aXNBbnlTZWxlY3RlZChzb3VyY2U6IEJhc2ljTGlzdCk6IGJvb2xlYW4ge1xyXG5cdFx0aWYgKHNvdXJjZS5waWNrLmxlbmd0aCA+IDApIHtcclxuXHRcdFx0cmV0dXJuIHRydWU7XHJcblx0XHR9XHJcblx0XHRyZXR1cm4gZmFsc2U7XHJcblx0fVxyXG5cclxuXHRwcml2YXRlIHVucGljayhzb3VyY2U6IEJhc2ljTGlzdCkge1xyXG5cdFx0Zm9yIChsZXQgaSA9IHNvdXJjZS5waWNrLmxlbmd0aCAtIDE7IGkgPj0gMDsgaSAtPSAxKSB7XHJcblx0XHRcdGlmIChzb3VyY2Uuc2lmdC5pbmRleE9mKHNvdXJjZS5waWNrW2ldKSA9PT0gLTEpIHtcclxuXHRcdFx0XHRzb3VyY2UucGljay5zcGxpY2UoaSwgMSk7XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHR9XHJcblxyXG5cdGNsZWFyRmlsdGVyKHNvdXJjZTogQmFzaWNMaXN0KSB7XHJcblx0XHRpZiAoc291cmNlKSB7XHJcblx0XHRcdHNvdXJjZS5waWNrZXIgPSAnJztcclxuXHRcdFx0dGhpcy5vbkZpbHRlcihzb3VyY2UpO1xyXG5cdFx0fVxyXG5cdH1cclxuXHJcblx0b25GaWx0ZXIoc291cmNlOiBCYXNpY0xpc3QpIHtcclxuXHRcdGlmIChzb3VyY2UucGlja2VyLmxlbmd0aCA+IDApIHtcclxuXHRcdFx0dHJ5IHtcclxuXHRcdFx0XHRjb25zdCBmaWx0ZXJlZCA9IHNvdXJjZS5saXN0LmZpbHRlciggKGl0ZW06IGFueSkgPT4ge1xyXG5cdFx0XHRcdFx0aWYgKE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChpdGVtKSA9PT0gJ1tvYmplY3QgT2JqZWN0XScpIHtcclxuXHRcdFx0XHRcdFx0aWYgKGl0ZW0uX25hbWUgIT09IHVuZGVmaW5lZCkge1xyXG5cdFx0XHRcdFx0XHRcdC8vIEB0cy1pZ25vcmU6IHJlbW92ZSB3aGVuIGQudHMgaGFzIGxvY2FsZSBhcyBhbiBhcmd1bWVudC5cclxuXHRcdFx0XHRcdFx0XHRyZXR1cm4gaXRlbS5fbmFtZS50b0xvY2FsZUxvd2VyQ2FzZSh0aGlzLmZvcm1hdC5sb2NhbGUpLmluZGV4T2Yoc291cmNlLnBpY2tlci50b0xvY2FsZUxvd2VyQ2FzZSh0aGlzLmZvcm1hdC5sb2NhbGUpKSAhPT0gLTE7XHJcblx0XHRcdFx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0XHRcdFx0Ly8gQHRzLWlnbm9yZTogcmVtb3ZlIHdoZW4gZC50cyBoYXMgbG9jYWxlIGFzIGFuIGFyZ3VtZW50LlxyXG5cdFx0XHRcdFx0XHRcdHJldHVybiBKU09OLnN0cmluZ2lmeShpdGVtKS50b0xvY2FsZUxvd2VyQ2FzZSh0aGlzLmZvcm1hdC5sb2NhbGUpLmluZGV4T2Yoc291cmNlLnBpY2tlci50b0xvY2FsZUxvd2VyQ2FzZSh0aGlzLmZvcm1hdC5sb2NhbGUpKSAhPT0gLTE7XHJcblx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0XHRcdC8vIEB0cy1pZ25vcmU6IHJlbW92ZSB3aGVuIGQudHMgaGFzIGxvY2FsZSBhcyBhbiBhcmd1bWVudC5cclxuXHRcdFx0XHRcdFx0cmV0dXJuIGl0ZW0udG9Mb2NhbGVMb3dlckNhc2UodGhpcy5mb3JtYXQubG9jYWxlKS5pbmRleE9mKHNvdXJjZS5waWNrZXIudG9Mb2NhbGVMb3dlckNhc2UodGhpcy5mb3JtYXQubG9jYWxlKSkgIT09IC0xO1xyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdH0pO1xyXG5cdFx0XHRcdHNvdXJjZS5zaWZ0ID0gZmlsdGVyZWQ7XHJcblx0XHRcdFx0dGhpcy51bnBpY2soc291cmNlKTtcclxuXHRcdFx0fSBjYXRjaCAoZSkge1xyXG5cdFx0XHRcdGlmIChlIGluc3RhbmNlb2YgUmFuZ2VFcnJvcikge1xyXG5cdFx0XHRcdFx0dGhpcy5mb3JtYXQubG9jYWxlID0gdW5kZWZpbmVkO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHRzb3VyY2Uuc2lmdCA9IHNvdXJjZS5saXN0O1xyXG5cdFx0XHR9XHJcblx0XHR9IGVsc2Uge1xyXG5cdFx0XHRzb3VyY2Uuc2lmdCA9IHNvdXJjZS5saXN0O1xyXG5cdFx0fVxyXG5cdH1cclxuXHJcblx0cHJpdmF0ZSBtYWtlSWQoaXRlbTogYW55KTogc3RyaW5nIHwgbnVtYmVyIHtcclxuXHRcdGlmICh0eXBlb2YgaXRlbSA9PT0gJ29iamVjdCcpIHtcclxuXHRcdFx0cmV0dXJuIGl0ZW1bdGhpcy5rZXldO1xyXG5cdFx0fSBlbHNlIHtcclxuXHRcdFx0cmV0dXJuIGl0ZW07XHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHQvLyBBbGxvdyBmb3IgY29tcGxleCBuYW1lcyBieSBwYXNzaW5nIGFuIGFycmF5IG9mIHN0cmluZ3MuXHJcblx0Ly8gRXhhbXBsZTogW2Rpc3BsYXldPVwiWyAnX3R5cGUuc3Vic3RyaW5nKDAsMSknLCAnX25hbWUnIF1cIlxyXG5cdHByb3RlY3RlZCBtYWtlTmFtZShpdGVtOiBhbnksIHNlcGFyYXRvciA9ICdfJyk6IHN0cmluZyB7XHJcblx0XHRjb25zdCBkaXNwbGF5ID0gdGhpcy5kaXNwbGF5O1xyXG5cclxuXHRcdGZ1bmN0aW9uIGZhbGxiYWNrKGl0bTogYW55KSB7XHJcblx0XHRcdHN3aXRjaCAoT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKGl0bSkpIHtcclxuXHRcdFx0Y2FzZSAnW29iamVjdCBOdW1iZXJdJzpcclxuXHRcdFx0XHRyZXR1cm4gaXRtO1xyXG5cdFx0XHRjYXNlICdbb2JqZWN0IFN0cmluZ10nOlxyXG5cdFx0XHRcdHJldHVybiBpdG07XHJcblx0XHRcdGRlZmF1bHQ6XHJcblx0XHRcdFx0aWYgKGl0bSAhPT0gdW5kZWZpbmVkKSB7XHJcblx0XHRcdFx0XHRyZXR1cm4gaXRtW2Rpc3BsYXldO1xyXG5cdFx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0XHRyZXR1cm4gJ3VuZGVmaW5lZCc7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9XHJcblx0XHR9XHJcblxyXG5cdFx0bGV0IHN0ciA9ICcnO1xyXG5cclxuXHRcdGlmICh0aGlzLmRpc3BsYXkgIT09IHVuZGVmaW5lZCkge1xyXG5cdFx0XHRzd2l0Y2ggKE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbCh0aGlzLmRpc3BsYXkpKSB7XHJcblx0XHRcdGNhc2UgJ1tvYmplY3QgRnVuY3Rpb25dJzpcclxuXHRcdFx0XHRzdHIgPSB0aGlzLmRpc3BsYXkoaXRlbSk7XHJcblx0XHRcdFx0YnJlYWs7XHJcblxyXG5cdFx0XHRjYXNlICdbb2JqZWN0IEFycmF5XSc6XHJcblx0XHRcdFx0Zm9yIChsZXQgaSA9IDAsIGxlbiA9IHRoaXMuZGlzcGxheS5sZW5ndGg7IGkgPCBsZW47IGkgKz0gMSkge1xyXG5cdFx0XHRcdFx0aWYgKHN0ci5sZW5ndGggPiAwKSB7XHJcblx0XHRcdFx0XHRcdHN0ciA9IHN0ciArIHNlcGFyYXRvcjtcclxuXHRcdFx0XHRcdH1cclxuXHJcblx0XHRcdFx0XHRpZiAodGhpcy5kaXNwbGF5W2ldLmluZGV4T2YoJy4nKSA9PT0gLTEpIHtcclxuXHRcdFx0XHRcdFx0Ly8gU2ltcGxlLCBqdXN0IGFkZCB0byBzdHJpbmcuXHJcblx0XHRcdFx0XHRcdHN0ciA9IHN0ciArIGl0ZW1bdGhpcy5kaXNwbGF5W2ldXTtcclxuXHRcdFx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0XHRcdC8vIENvbXBsZXgsIHNvbWUgYWN0aW9uIG5lZWRzIHRvIGJlIHBlcmZvcm1lZFxyXG5cdFx0XHRcdFx0XHRjb25zdCBwYXJ0cyA9IHRoaXMuZGlzcGxheVtpXS5zcGxpdCgnLicpO1xyXG5cclxuXHRcdFx0XHRcdFx0Y29uc3QgcyA9IGl0ZW1bcGFydHNbMF1dO1xyXG5cdFx0XHRcdFx0XHRpZiAocykge1xyXG5cdFx0XHRcdFx0XHRcdC8vIFVzZSBicnV0ZSBmb3JjZVxyXG5cdFx0XHRcdFx0XHRcdGlmIChwYXJ0c1sxXS5pbmRleE9mKCdzdWJzdHJpbmcnKSAhPT0gLTEpIHtcclxuXHRcdFx0XHRcdFx0XHRcdGNvbnN0IG51bXMgPSAocGFydHNbMV0uc3Vic3RyaW5nKHBhcnRzWzFdLmluZGV4T2YoJygnKSArIDEsIHBhcnRzWzFdLmluZGV4T2YoJyknKSkpLnNwbGl0KCcsJyk7XHJcblxyXG5cdFx0XHRcdFx0XHRcdFx0c3dpdGNoIChudW1zLmxlbmd0aCkge1xyXG5cdFx0XHRcdFx0XHRcdFx0Y2FzZSAxOlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRzdHIgPSBzdHIgKyBzLnN1YnN0cmluZyhwYXJzZUludChudW1zWzBdLCAxMCkpO1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRicmVhaztcclxuXHRcdFx0XHRcdFx0XHRcdGNhc2UgMjpcclxuXHRcdFx0XHRcdFx0XHRcdFx0c3RyID0gc3RyICsgcy5zdWJzdHJpbmcocGFyc2VJbnQobnVtc1swXSwgMTApLCBwYXJzZUludChudW1zWzFdLCAxMCkpO1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRicmVhaztcclxuXHRcdFx0XHRcdFx0XHRcdGRlZmF1bHQ6XHJcblx0XHRcdFx0XHRcdFx0XHRcdHN0ciA9IHN0ciArIHM7XHJcblx0XHRcdFx0XHRcdFx0XHRcdGJyZWFrO1xyXG5cdFx0XHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0XHRcdFx0XHQvLyBtZXRob2Qgbm90IGFwcHJvdmVkLCBzbyBqdXN0IGFkZCBzLlxyXG5cdFx0XHRcdFx0XHRcdFx0c3RyID0gc3RyICsgcztcclxuXHRcdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0YnJlYWs7XHJcblx0XHRcdGRlZmF1bHQ6XHJcblx0XHRcdFx0c3RyID0gZmFsbGJhY2soaXRlbSk7XHJcblx0XHRcdFx0YnJlYWs7XHJcblx0XHRcdH1cclxuXHRcdH0gZWxzZSB7XHJcblx0XHRcdHN0ciA9IGZhbGxiYWNrKGl0ZW0pO1xyXG5cdFx0fVxyXG5cclxuXHRcdHJldHVybiBzdHI7XHJcblx0fVxyXG59XHJcbiIsIjxkaXYgY2xhc3M9XCJkdWFsLWxpc3RcIj5cclxuXHQ8ZGl2IGNsYXNzPVwibGlzdGJveFwiIFtuZ1N0eWxlXT1cInsgJ29yZGVyJyA6ICBkaXJlY3Rpb24oKSA/IDEgOiAyLCAnbWFyZ2luLWxlZnQnIDogZGlyZWN0aW9uKCkgPyAwIDogJzEwcHgnIH1cIj5cclxuXHRcdDxidXR0b24gdHlwZT1cImJ1dHRvblwiIG5hbWU9XCJhZGRCdG5cIiBjbGFzcz1cImJ0biBidG4tcHJpbWFyeSBidG4tYmxvY2tcIlxyXG5cdFx0XHQoY2xpY2spPVwibW92ZUl0ZW0oYXZhaWxhYmxlLCBjb25maXJtZWQpXCIgW25nQ2xhc3NdPVwiZGlyZWN0aW9uKCkgPyAncG9pbnQtcmlnaHQnIDogJ3BvaW50LWxlZnQnXCJcclxuXHRcdFx0W2Rpc2FibGVkXT1cImF2YWlsYWJsZS5waWNrLmxlbmd0aCA9PT0gMFwiPnt7Zm9ybWF0LmFkZH19PC9idXR0b24+XHJcblxyXG5cdFx0PGZvcm0gKm5nSWY9XCJmaWx0ZXJcIiBjbGFzcz1cImZpbHRlclwiPlxyXG5cdFx0XHQ8aW5wdXQgY2xhc3M9XCJmb3JtLWNvbnRyb2xcIiBuYW1lPVwiZmlsdGVyU291cmNlXCIgWyhuZ01vZGVsKV09XCJhdmFpbGFibGUucGlja2VyXCIgKG5nTW9kZWxDaGFuZ2UpPVwib25GaWx0ZXIoYXZhaWxhYmxlKVwiPlxyXG5cdFx0PC9mb3JtPlxyXG5cclxuXHRcdDxkaXYgY2xhc3M9XCJyZWNvcmQtcGlja2VyXCI+XHJcblx0XHRcdDx1bCBbbmdTdHlsZV09XCJ7J21heC1oZWlnaHQnOiBoZWlnaHQsICdtaW4taGVpZ2h0JzogaGVpZ2h0fVwiIFtuZ0NsYXNzXT1cIntvdmVyOmF2YWlsYWJsZS5kcmFnT3Zlcn1cIlxyXG5cdFx0XHRcdChkcm9wKT1cImRyb3AoJGV2ZW50LCBjb25maXJtZWQpXCIgKGRyYWdvdmVyKT1cImFsbG93RHJvcCgkZXZlbnQsIGF2YWlsYWJsZSlcIiAoZHJhZ2xlYXZlKT1cImRyYWdMZWF2ZSgpXCI+XHJcblx0XHRcdFx0PGxpICpuZ0Zvcj1cImxldCBpdGVtIG9mIGF2YWlsYWJsZS5zaWZ0OyBsZXQgaWR4PWluZGV4O1wiXHJcblx0XHRcdFx0XHQoY2xpY2spPVwiZGlzYWJsZWQgPyBudWxsIDogc2VsZWN0SXRlbShhdmFpbGFibGUucGljaywgaXRlbSk7IHNoaWZ0Q2xpY2soJGV2ZW50LCBpZHgsIGF2YWlsYWJsZSwgaXRlbSlcIlxyXG5cdFx0XHRcdFx0W25nQ2xhc3NdPVwie3NlbGVjdGVkOiBpc0l0ZW1TZWxlY3RlZChhdmFpbGFibGUucGljaywgaXRlbSksIGRpc2FibGVkOiBkaXNhYmxlZH1cIlxyXG5cdFx0XHRcdFx0W2RyYWdnYWJsZV09XCIhZGlzYWJsZWQgJiYgZm9ybWF0LmRyYWdnYWJsZVwiIChkcmFnc3RhcnQpPVwiZHJhZygkZXZlbnQsIGl0ZW0sIGF2YWlsYWJsZSlcIiAoZHJhZ2VuZCk9XCJkcmFnRW5kKGF2YWlsYWJsZSlcIlxyXG5cdFx0XHRcdD48bGFiZWw+e3tpdGVtLl9uYW1lfX08L2xhYmVsPjwvbGk+XHJcblx0XHRcdDwvdWw+XHJcblx0XHQ8L2Rpdj5cclxuXHJcblx0XHQ8ZGl2IGNsYXNzPVwiYnV0dG9uLWJhclwiPlxyXG5cdFx0XHQ8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzcz1cImJ0biBidG4tcHJpbWFyeSBwdWxsLWxlZnRcIiAoY2xpY2spPVwic2VsZWN0QWxsKGF2YWlsYWJsZSlcIlxyXG5cdFx0XHRcdFtkaXNhYmxlZF09XCJkaXNhYmxlZCB8fCBpc0FsbFNlbGVjdGVkKGF2YWlsYWJsZSlcIj57e2Zvcm1hdC5hbGx9fTwvYnV0dG9uPlxyXG5cdFx0XHQ8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzcz1cImJ0biBidG4tZGVmYXVsdCBwdWxsLXJpZ2h0XCIgKGNsaWNrKT1cInNlbGVjdE5vbmUoYXZhaWxhYmxlKVwiXHJcblx0XHRcdFx0W2Rpc2FibGVkXT1cIiFpc0FueVNlbGVjdGVkKGF2YWlsYWJsZSlcIj57e2Zvcm1hdC5ub25lfX08L2J1dHRvbj5cclxuXHRcdDwvZGl2PlxyXG5cdDwvZGl2PlxyXG5cclxuXHQ8ZGl2IGNsYXNzPVwibGlzdGJveFwiIFtuZ1N0eWxlXT1cInsgJ29yZGVyJyA6IGRpcmVjdGlvbigpID8gMiA6IDEsICdtYXJnaW4tbGVmdCcgOiBkaXJlY3Rpb24oKSA/ICcxMHB4JyA6IDAgfVwiPlxyXG5cdFx0PGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgbmFtZT1cInJlbW92ZUJ0blwiIGNsYXNzPVwiYnRuIGJ0bi1wcmltYXJ5IGJ0bi1ibG9ja1wiXHJcblx0XHRcdChjbGljayk9XCJtb3ZlSXRlbShjb25maXJtZWQsIGF2YWlsYWJsZSlcIiBbbmdDbGFzc109XCJkaXJlY3Rpb24oKSA/ICdwb2ludC1sZWZ0JyA6ICdwb2ludC1yaWdodCdcIlxyXG5cdFx0XHRbZGlzYWJsZWRdPVwiY29uZmlybWVkLnBpY2subGVuZ3RoID09PSAwXCI+e3tmb3JtYXQucmVtb3ZlfX08L2J1dHRvbj5cclxuXHJcblx0XHQ8Zm9ybSAqbmdJZj1cImZpbHRlclwiIGNsYXNzPVwiZmlsdGVyXCI+XHJcblx0XHRcdDxpbnB1dCBjbGFzcz1cImZvcm0tY29udHJvbFwiIG5hbWU9XCJmaWx0ZXJEZXN0aW5hdGlvblwiIFsobmdNb2RlbCldPVwiY29uZmlybWVkLnBpY2tlclwiIChuZ01vZGVsQ2hhbmdlKT1cIm9uRmlsdGVyKGNvbmZpcm1lZClcIj5cclxuXHRcdDwvZm9ybT5cclxuXHJcblx0XHQ8ZGl2IGNsYXNzPVwicmVjb3JkLXBpY2tlclwiPlxyXG5cdFx0XHQ8dWwgW25nU3R5bGVdPVwieydtYXgtaGVpZ2h0JzogaGVpZ2h0LCAnbWluLWhlaWdodCc6IGhlaWdodH1cIiBbbmdDbGFzc109XCJ7b3Zlcjpjb25maXJtZWQuZHJhZ092ZXJ9XCJcclxuXHRcdFx0XHQoZHJvcCk9XCJkcm9wKCRldmVudCwgYXZhaWxhYmxlKVwiIChkcmFnb3Zlcik9XCJhbGxvd0Ryb3AoJGV2ZW50LCBjb25maXJtZWQpXCIgKGRyYWdsZWF2ZSk9XCJkcmFnTGVhdmUoKVwiPlxyXG5cdFx0XHRcdDxsaSAjaXRtQ29uZiAqbmdGb3I9XCJsZXQgaXRlbSBvZiBjb25maXJtZWQuc2lmdDsgbGV0IGlkeD1pbmRleDtcIlxyXG5cdFx0XHRcdFx0KGNsaWNrKT1cImRpc2FibGVkID8gbnVsbCA6IHNlbGVjdEl0ZW0oY29uZmlybWVkLnBpY2ssIGl0ZW0pOyBzaGlmdENsaWNrKCRldmVudCwgaWR4LCBjb25maXJtZWQsIGl0ZW0pXCJcclxuXHRcdFx0XHRcdFtuZ0NsYXNzXT1cIntzZWxlY3RlZDogaXNJdGVtU2VsZWN0ZWQoY29uZmlybWVkLnBpY2ssIGl0ZW0pLCBkaXNhYmxlZDogZGlzYWJsZWR9XCJcclxuXHRcdFx0XHRcdFtkcmFnZ2FibGVdPVwiIWRpc2FibGVkICYmIGZvcm1hdC5kcmFnZ2FibGVcIiAoZHJhZ3N0YXJ0KT1cImRyYWcoJGV2ZW50LCBpdGVtLCBjb25maXJtZWQpXCIgKGRyYWdlbmQpPVwiZHJhZ0VuZChjb25maXJtZWQpXCJcclxuXHRcdFx0XHQ+PGxhYmVsPnt7aXRlbS5fbmFtZX19PC9sYWJlbD48L2xpPlxyXG5cdFx0XHQ8L3VsPlxyXG5cdFx0PC9kaXY+XHJcblxyXG5cdFx0PGRpdiBjbGFzcz1cImJ1dHRvbi1iYXJcIj5cclxuXHRcdFx0PGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3M9XCJidG4gYnRuLXByaW1hcnkgcHVsbC1sZWZ0XCIgKGNsaWNrKT1cInNlbGVjdEFsbChjb25maXJtZWQpXCJcclxuXHRcdFx0XHRbZGlzYWJsZWRdPVwiZGlzYWJsZWQgfHwgaXNBbGxTZWxlY3RlZChjb25maXJtZWQpXCI+e3tmb3JtYXQuYWxsfX08L2J1dHRvbj5cclxuXHRcdFx0PGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3M9XCJidG4gYnRuLWRlZmF1bHQgcHVsbC1yaWdodFwiIChjbGljayk9XCJzZWxlY3ROb25lKGNvbmZpcm1lZClcIlxyXG5cdFx0XHRcdFtkaXNhYmxlZF09XCIhaXNBbnlTZWxlY3RlZChjb25maXJtZWQpXCI+e3tmb3JtYXQubm9uZX19PC9idXR0b24+XHJcblx0XHQ8L2Rpdj5cclxuXHQ8L2Rpdj5cclxuPC9kaXY+XHJcbiJdfQ==