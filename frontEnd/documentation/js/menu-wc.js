'use strict';

customElements.define('compodoc-menu', class extends HTMLElement {
    constructor() {
        super();
        this.isNormalMode = this.getAttribute('mode') === 'normal';
    }

    connectedCallback() {
        this.render(this.isNormalMode);
    }

    render(isNormalMode) {
        let tp = lithtml.html(`
        <nav>
            <ul class="list">
                <li class="title">
                    <a href="index.html" data-type="index-link">front-end documentation</a>
                </li>

                <li class="divider"></li>
                ${ isNormalMode ? `<div id="book-search-input" role="search"><input type="text" placeholder="Type to search"></div>` : '' }
                <li class="chapter">
                    <a data-type="chapter-link" href="index.html"><span class="icon ion-ios-home"></span>Getting started</a>
                    <ul class="links">
                        <li class="link">
                            <a href="overview.html" data-type="chapter-link">
                                <span class="icon ion-ios-keypad"></span>Overview
                            </a>
                        </li>
                        <li class="link">
                            <a href="index.html" data-type="chapter-link">
                                <span class="icon ion-ios-paper"></span>README
                            </a>
                        </li>
                                <li class="link">
                                    <a href="dependencies.html" data-type="chapter-link">
                                        <span class="icon ion-ios-list"></span>Dependencies
                                    </a>
                                </li>
                                <li class="link">
                                    <a href="properties.html" data-type="chapter-link">
                                        <span class="icon ion-ios-apps"></span>Properties
                                    </a>
                                </li>
                    </ul>
                </li>
                    <li class="chapter modules">
                        <a data-type="chapter-link" href="modules.html">
                            <div class="menu-toggler linked" data-bs-toggle="collapse" ${ isNormalMode ?
                                'data-bs-target="#modules-links"' : 'data-bs-target="#xs-modules-links"' }>
                                <span class="icon ion-ios-archive"></span>
                                <span class="link-name">Modules</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                        </a>
                        <ul class="links collapse " ${ isNormalMode ? 'id="modules-links"' : 'id="xs-modules-links"' }>
                            <li class="link">
                                <a href="modules/AppModule.html" data-type="entity-link" >AppModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#components-links-module-AppModule-cbd6afd3b51c46d37a0e71a0946c75583aeff49f2ace85afb6e566df4d6f150e4c7f81ca53d251287d4b2f757d0bfbe0112c9fa0ba9a025a6ec5342b61dd8168"' : 'data-bs-target="#xs-components-links-module-AppModule-cbd6afd3b51c46d37a0e71a0946c75583aeff49f2ace85afb6e566df4d6f150e4c7f81ca53d251287d4b2f757d0bfbe0112c9fa0ba9a025a6ec5342b61dd8168"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-AppModule-cbd6afd3b51c46d37a0e71a0946c75583aeff49f2ace85afb6e566df4d6f150e4c7f81ca53d251287d4b2f757d0bfbe0112c9fa0ba9a025a6ec5342b61dd8168"' :
                                            'id="xs-components-links-module-AppModule-cbd6afd3b51c46d37a0e71a0946c75583aeff49f2ace85afb6e566df4d6f150e4c7f81ca53d251287d4b2f757d0bfbe0112c9fa0ba9a025a6ec5342b61dd8168"' }>
                                            <li class="link">
                                                <a href="components/ActivosFromComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ActivosFromComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/AppComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AppComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/BodyComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >BodyComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/BorrarOrdenDialogComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >BorrarOrdenDialogComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/CameraComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >CameraComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/EdificioFormComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >EdificioFormComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/Err404Component.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >Err404Component</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/FooterComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >FooterComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/HeaderComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >HeaderComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/LandingBodyComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >LandingBodyComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/OrdenDetalleDialogComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >OrdenDetalleDialogComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/OrdenGeneradaDialogComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >OrdenGeneradaDialogComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/OrdenTrabajoComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >OrdenTrabajoComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/PanelComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >PanelComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/RegisterComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >RegisterComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ReporteComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ReporteComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/TutorialComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >TutorialComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/UserOtComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >UserOtComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/UserPanelTutorial.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >UserPanelTutorial</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/UserTAComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >UserTAComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/UserTTComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >UserTTComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-AppModule-cbd6afd3b51c46d37a0e71a0946c75583aeff49f2ace85afb6e566df4d6f150e4c7f81ca53d251287d4b2f757d0bfbe0112c9fa0ba9a025a6ec5342b61dd8168"' : 'data-bs-target="#xs-injectables-links-module-AppModule-cbd6afd3b51c46d37a0e71a0946c75583aeff49f2ace85afb6e566df4d6f150e4c7f81ca53d251287d4b2f757d0bfbe0112c9fa0ba9a025a6ec5342b61dd8168"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-AppModule-cbd6afd3b51c46d37a0e71a0946c75583aeff49f2ace85afb6e566df4d6f150e4c7f81ca53d251287d4b2f757d0bfbe0112c9fa0ba9a025a6ec5342b61dd8168"' :
                                        'id="xs-injectables-links-module-AppModule-cbd6afd3b51c46d37a0e71a0946c75583aeff49f2ace85afb6e566df4d6f150e4c7f81ca53d251287d4b2f757d0bfbe0112c9fa0ba9a025a6ec5342b61dd8168"' }>
                                        <li class="link">
                                            <a href="injectables/EdificioService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >EdificioService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/AppRoutingModule.html" data-type="entity-link" >AppRoutingModule</a>
                            </li>
                </ul>
                </li>
                        <li class="chapter">
                            <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#injectables-links"' :
                                'data-bs-target="#xs-injectables-links"' }>
                                <span class="icon ion-md-arrow-round-down"></span>
                                <span>Injectables</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                            <ul class="links collapse " ${ isNormalMode ? 'id="injectables-links"' : 'id="xs-injectables-links"' }>
                                <li class="link">
                                    <a href="injectables/ActivoService.html" data-type="entity-link" >ActivoService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/EdificioService.html" data-type="entity-link" >EdificioService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/OrdenTrabajoService.html" data-type="entity-link" >OrdenTrabajoService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/UsersService.html" data-type="entity-link" >UsersService</a>
                                </li>
                            </ul>
                        </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#guards-links"' :
                            'data-bs-target="#xs-guards-links"' }>
                            <span class="icon ion-ios-lock"></span>
                            <span>Guards</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="guards-links"' : 'id="xs-guards-links"' }>
                            <li class="link">
                                <a href="guards/AuthGuard.html" data-type="entity-link" >AuthGuard</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#interfaces-links"' :
                            'data-bs-target="#xs-interfaces-links"' }>
                            <span class="icon ion-md-information-circle-outline"></span>
                            <span>Interfaces</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? ' id="interfaces-links"' : 'id="xs-interfaces-links"' }>
                            <li class="link">
                                <a href="interfaces/Activo.html" data-type="entity-link" >Activo</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/ConcatenacionResponse.html" data-type="entity-link" >ConcatenacionResponse</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Edificio.html" data-type="entity-link" >Edificio</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/OrdenTrabajo.html" data-type="entity-link" >OrdenTrabajo</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Panel.html" data-type="entity-link" >Panel</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/TipoOrden.html" data-type="entity-link" >TipoOrden</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/User.html" data-type="entity-link" >User</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/User-1.html" data-type="entity-link" >User</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/User-2.html" data-type="entity-link" >User</a>
                            </li>
                        </ul>
                    </li>
                        <li class="chapter">
                            <a data-type="chapter-link" href="routes.html"><span class="icon ion-ios-git-branch"></span>Routes</a>
                        </li>
                    <li class="chapter">
                        <a data-type="chapter-link" href="coverage.html"><span class="icon ion-ios-stats"></span>Documentation coverage</a>
                    </li>
                    <li class="divider"></li>
                    <li class="copyright">
                        Documentation generated using <a href="https://compodoc.app/" target="_blank" rel="noopener noreferrer">
                            <img data-src="images/compodoc-vectorise.png" class="img-responsive" data-type="compodoc-logo">
                        </a>
                    </li>
            </ul>
        </nav>
        `);
        this.innerHTML = tp.strings;
    }
});