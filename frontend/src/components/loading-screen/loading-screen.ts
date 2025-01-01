export class LoadingScreen {
    root: HTMLDivElement;

    progressBar: HTMLParagraphElement;

    constructor () {
        this.root = document.querySelector('.loading-screen') as HTMLDivElement;

        this.progressBar = this.root.querySelector('.loading-screen__progress-bar') as HTMLParagraphElement;

        this.setLoadingScreen();
    }

    private setLoadingScreen = () => {
        let counter = 0;

        const interval = setInterval(() => {
            counter++;

            this.progressBar.textContent = `${counter}%`;

            if (counter === 100) {
                clearInterval(interval);

                this.onHideLoadingScreen();
            }
        }, 50);
    };

    private onHideLoadingScreen = () => {
        this.root.classList.add('visually-hidden');
        document.body.classList.remove('scroll-lock');

        setTimeout(() => this.root.classList.add('hidden'), 2000);
    };
}

new LoadingScreen();
