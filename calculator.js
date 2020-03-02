class Calculator {
    constructor() {
        this.total = 0;
        this.createCalculator();
    }

    createCalculator() {
        const $outline = $('<div>')
            .attr('id', 'outline');
        const $display = $('<div>')
            .attr('id', 'display');
        const $buttons = $('<div>')
            .attr('id', 'buttons');

        for (let row = 0; row < 5; row++) {
            for (let col = 0; col < 4; col++) {
                const $button = $('<div>')
                    .addClass('button')
                    .attr('data-col', `${col}`)
                    .attr('data-row', `${row}`)
                if (col === 0) {
                    if (row === 0) {
                        $button.text('AC')
                               .addClass('dark-gray');
                    } else if (row === 1) {
                        $button.text('7');
                    } else if (row === 2) {
                        $button.text('4');
                    } else if (row === 3) {
                        $button.text('1');
                    } else if (row === 4) {
                        $button.text('0');
                    }
                } else if (col === 1) {
                    if (row === 0) {
                        $button.text('+/-')
                               .addClass('dark-gray');
                    } else if (row === 1) {
                        $button.text('8');
                    } else if (row === 2) {
                        $button.text('5');
                    } else if (row === 3) {
                        $button.text('2');
                    } else if (row === 4) {
                        $button.text('0');
                    }
                } else if (col === 2) {
                    if (row === 0) {
                        $button.text('%')
                               .addClass('dark-gray');
                    } else if (row === 1) {
                        $button.text('9');
                    } else if (row === 2) {
                        $button.text('6');
                    } else if (row === 3) {
                        $button.text('3');
                    } else if (row === 4) {
                        $button.text('.');
                    }
                } else if (col === 3) {
                    $button.addClass('orange');
                    if (row === 0) {
                        $button.text('/');
                    } else if (row === 1) {
                        $button.text('x');
                    } else if (row === 2) {
                        $button.text('-');
                    } else if (row === 3) {
                        $button.text('+');
                    } else if (row === 4) {
                        $button.text('=');
                    }
                }
                $buttons.append($button);
            }
        }

        $('body').append($outline);
        $outline.append($display);
        $outline.append($buttons);
    }

    setupEventListeners() {


    }
}
