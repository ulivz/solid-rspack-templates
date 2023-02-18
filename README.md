# Solid Rspack Templates

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

## Motivation

[Solid](https://www.solidjs.com/) is a lightweight and fine grained Javascript web framework made for building responsive and performant web apps, and `Rspack` is a fast rust-based web bundler, the combination of the two will bring the ultimate build-time and runtime performance.

## Development

The monorepo leverages `pnpm` as the package manager. To install `pnpm`, run the following command in your terminal.

```bash
npm install -g pnpm
```

Run `pnpm install` to install all the dependencies, and run following scripts to launch rspack dev server:

```bash
pnpm run --filter <template> dev
```

Available templates:

- `js`
- `ts`
