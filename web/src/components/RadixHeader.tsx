import * as NavigationMenu from '@radix-ui/react-navigation-menu';
import { CaretDown, ArrowArcLeft } from 'phosphor-react';
import '../styles/radix.css';
import ListItem from './ListItem';

const Header = () => {
    return (
        <NavigationMenu.Root className="NavigationMenuRoot">
            <NavigationMenu.List className="NavigationMenuList">

                <div className='absolute left-12'>
                    <NavigationMenu.Item >
                        <NavigationMenu.Link className="NavigationMenuLink" href="localhost:5173/p">
                            <h1 className="text-3xl text-black font-semibold">Steelex</h1>
                        </NavigationMenu.Link>
                    </NavigationMenu.Item>
                </div>

                <NavigationMenu.Item>
                    <NavigationMenu.Trigger className="NavigationMenuTrigger">
                        Marcas <CaretDown size={24} />
                    </NavigationMenu.Trigger>
                    <NavigationMenu.Content className="NavigationMenuContent">
                        <ul className="List one">
                            <li style={{ gridRow: 'span 3' }}>
                                <NavigationMenu.Link asChild>
                                    <a className="Callout" href="/">
                                        <svg aria-hidden width="38" height="38" viewBox="0 0 25 25" fill="white">
                                            <path d="M12 25C7.58173 25 4 21.4183 4 17C4 12.5817 7.58173 9 12 9V25Z"></path>
                                            <path d="M12 0H4V8H12V0Z"></path>
                                            <path d="M17 8C19.2091 8 21 6.20914 21 4C21 1.79086 19.2091 0 17 0C14.7909 0 13 1.79086 13 4C13 6.20914 14.7909 8 17 8Z"></path>
                                        </svg>
                                        <div className="CalloutHeading">Radix Primitives</div>
                                        <p className="CalloutText">Unstyled, accessible components for React.</p>
                                    </a>
                                </NavigationMenu.Link>
                            </li>

                            <ListItem href="https://stitches.dev/" title="Stitches">
                                CSS-in-JS with best-in-class developer experience.
                            </ListItem>
                            <ListItem href="/colors" title="Colors">
                                Beautiful, thought-out palettes with auto dark mode.
                            </ListItem>
                            <ListItem href="https://icons.radix-ui.com/" title="Icons">
                                A crisp set of 15x15 icons, balanced and consistent.
                            </ListItem>
                        </ul>
                    </NavigationMenu.Content>
                </NavigationMenu.Item>

                <NavigationMenu.Item>
                    <NavigationMenu.Trigger className="NavigationMenuTrigger">
                        Produtos <CaretDown size={24} />
                    </NavigationMenu.Trigger>
                    <NavigationMenu.Content className="NavigationMenuContent">
                        <ul className="List two">
                            <ListItem title="Introduction" href="/docs/primitives/overview/introduction">
                                Build high-quality, accessible design systems and web apps.
                            </ListItem>
                            <ListItem title="Getting started" href="/docs/primitives/overview/getting-started">
                                A quick tutorial to get you up and running with Radix Primitives.
                            </ListItem>
                            <ListItem title="Styling" href="/docs/primitives/overview/styling">
                                Unstyled and compatible with any styling solution.
                            </ListItem>
                            <ListItem title="Animation" href="/docs/primitives/overview/animation">
                                Use CSS keyframes or any animation library of your choice.
                            </ListItem>
                            <ListItem title="Accessibility" href="/docs/primitives/overview/accessibility">
                                Tested in a range of browsers and assistive technologies.
                            </ListItem>
                            <ListItem title="Releases" href="/docs/primitives/overview/releases">
                                Radix Primitives releases and their changelogs.
                            </ListItem>
                        </ul>
                    </NavigationMenu.Content>
                </NavigationMenu.Item>

                <div className='absolute right-12 flex items-center justify-center'>
                    <NavigationMenu.Item>
                        <NavigationMenu.Link className="NavigationMenuLink" href="localhost:5173/register">
                            <h2 className='text-black font-semibold text-1xl'>Cadastre-se</h2>
                        </NavigationMenu.Link>
                    </NavigationMenu.Item>

                    <NavigationMenu.Item>
                        <NavigationMenu.Link className="NavigationMenuLink" href="localhost:5173/login">
                            <h2 className='text-black font-semibold text-1xl'>Login</h2>
                        </NavigationMenu.Link>
                    </NavigationMenu.Item>
                </div>

                <NavigationMenu.Indicator className="NavigationMenuIndicator">
                    <ArrowArcLeft size={32} className='text-black'/>
                </NavigationMenu.Indicator>

            </NavigationMenu.List>

            <div className="ViewportPosition">
                <NavigationMenu.Viewport className="NavigationMenuViewport" />
            </div>
        </NavigationMenu.Root>
    );
};

export default Header;