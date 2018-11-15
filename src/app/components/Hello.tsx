import * as React from 'react';

export interface IProps {
    compiler: string;
    framework: string;
    packer: string;
}

export class Hello extends React.Component<IProps, {}> {
    render() {
        const {framework, compiler, packer} = this.props;
        return (
            <h1>
                {`This is a ${framework} application using ${compiler} with ${packer}`}
            </h1>);
    }
}
