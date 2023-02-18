## SolidJS Rspack Template

<table>
    <tbody>
        <tr>
            <td>
                <img src="./media/dev-server.png">
            </td>
            <td>
                <img src="./media/browser.png">
            </td>
        </tr>
    </tbody>
</table>

Those templates dependencies are maintained via [pnpm](https://pnpm.io) via `pnpm up -Lri`.

The monorepo example leverage `pnpm` as the package manager. To install `pnpm`, run the following command in your terminal.

```bash
npm install -g pnpm
```

Run `pnpm install` to install all the dependencies.

### Learn more on the [Solid Website](https://solidjs.com) and come chat with us on our [Discord](https://discord.com/invite/solidjs)

## Available Scripts

In the project directory, you can run:

### `npm dev`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>

### `npm run build`

Builds the app for production to the `dist` folder.<br>
It correctly bundles Solid in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

## Deployment

You can deploy the `dist` folder to any static host provider (netlify, surge, now, etc.)
