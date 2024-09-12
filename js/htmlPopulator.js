class Project {

    constructBox(jsonObject){
        let grid = document.getElementsByClassName('grid');

        let gridBox = document.createElement('div');
        gridBox.classList.add('grid-box');
        gridBox.id = `box_id_${jsonObject['id']}`;
        jsonObject["tags"].forEach( (tag) => {
            gridBox.classList.add(tag);
        });

        let gridBoxContent = document.createElement('div');
        gridBoxContent.classList.add('grid-box-content');

        let gridBoxBackground = document.createElement('img');
        gridBoxBackground.classList.add('grid-box-background');
        gridBoxBackground.src = jsonObject['img-source'];

        let gridBoxBackgroundOverlay = document.createElement('div');
        gridBoxBackgroundOverlay.classList.add('grid-box-background-overlay');

        let boxTitle = document.createElement('p');
        boxTitle.classList.add('box-title');
        boxTitle.innerHTML = jsonObject['title'];

        gridBox.appendChild(gridBoxContent);

        gridBoxContent.appendChild(gridBoxBackground);
        gridBoxContent.appendChild(gridBoxBackgroundOverlay);

        gridBoxBackgroundOverlay.appendChild(boxTitle);

        grid[0].appendChild(gridBox);

        const open_modal = document.getElementById(`box_id_${jsonObject['id']}`);
        const modal_container = document.getElementById(`modal_id_${jsonObject['id']}`);
        const close_modal = modal_container.getElementsByClassName('close');

        const projectsPage = document.getElementById('projects_page');
        const body = document.getElementById('body');
        

        open_modal.addEventListener('click', () => {
            let currentScrollY = window.scrollY;
            modal_container.classList.add('show');
            modal_container.style.marginTop = `${currentScrollY}px`;
            
            projectsPage.style.zIndex = '5';
            body.style.overflowY = 'hidden';

        });

        close_modal[0].addEventListener('click', () => {
            modal_container.classList.remove('show');
            projectsPage.style.zIndex = '0';
            body.style.overflowY = 'auto';
        });

    }

    constructModal(jsonObject){
        let modalContainer = document.createElement('div');
        modalContainer.classList.add('modal-container');
        modalContainer.id = `modal_id_${jsonObject['id']}`;

        // modal
        let modal = document.createElement('div');
        modal.classList.add('modal');
        modalContainer.appendChild(modal);

            // modal children
            let closeButton = document.createElement('button');
            closeButton.classList.add('close');
            closeButton.innerHTML = 'X';
            modal.appendChild(closeButton)

            let modalImageTitleExtraContainer = document.createElement('div');
            modalImageTitleExtraContainer.classList.add('modal-image-title-extra-cont');
            modal.appendChild(modalImageTitleExtraContainer);

                // titleExtra
                let titleExtra = document.createElement('div');
                titleExtra.classList.add('title-extra');
                modalImageTitleExtraContainer.appendChild(titleExtra);

                    // titleExtra children
                    let titleContainer = document.createElement('div');
                    titleContainer.classList.add('title-container');
                    titleExtra.appendChild(titleContainer);

                        // titleExtra children
                        let title = document.createElement('p');
                        title.classList.add('title');
                        title.innerHTML = jsonObject['title'];
                        titleContainer.appendChild(title);

                    
                    let extraContainer = document.createElement('div');
                    extraContainer.classList.add('extra-container');
                    titleExtra.appendChild(extraContainer);

                        // extraLeft
                        let extraLeft = document.createElement('div');
                        extraLeft.classList.add('extra-left');
                        extraContainer.appendChild(extraLeft);

                            let extraSetting = document.createElement('p');
                            extraSetting.classList.add('extra-text');
                            extraSetting.innerHTML = jsonObject['setting'];
                            extraLeft.appendChild(extraSetting);

                            let extraDate = document.createElement('p');
                            extraDate.classList.add('extra-text');
                            extraDate.innerHTML = jsonObject['date'];
                            extraLeft.appendChild(extraDate);

                            let extraType = document.createElement('p');
                            extraType.classList.add('extra-text');
                            extraType.innerHTML = jsonObject['type'];
                            extraLeft.appendChild(extraType);

                        // extraRight
                        let extraRight = document.createElement('div');
                        extraRight.classList.add('extra-right');
                        extraContainer.appendChild(extraRight);

                            if(jsonObject['gitHub']){
                                let extraTextRightContainerOne = document.createElement('a');
                                extraTextRightContainerOne.classList.add('extra-text-right-cont');
                                extraTextRightContainerOne.href = jsonObject["gitHub-link"];
                                extraTextRightContainerOne.target = "_blank";
                                extraRight.appendChild(extraTextRightContainerOne);

                                    let gitImg = document.createElement('img');
                                    gitImg.classList.add('git-icon');
                                    gitImg.src = "icon/github-icon.svg";
                                    extraTextRightContainerOne.appendChild(gitImg);

                                    let gitText = document.createElement('p');
                                    gitText.classList.add('extra-text-right');
                                    gitText.innerHTML = 'GitHub';
                                    extraTextRightContainerOne.appendChild(gitText);
                            }

                            if(jsonObject['report']){
                                let extraTextRightContainerTwo = document.createElement('a');
                                extraTextRightContainerTwo.classList.add('extra-text-right-cont');
                                extraTextRightContainerTwo.href = jsonObject["report-link"];
                                extraTextRightContainerTwo.target = "_blank";
                                extraRight.appendChild(extraTextRightContainerTwo);

                                    let reportImg = document.createElement('img');
                                    reportImg.classList.add('report-icon');
                                    reportImg.src = "icon/CV-icon.svg";
                                    extraTextRightContainerTwo.appendChild(reportImg);

                                    let reportText = document.createElement('p');
                                    reportText.classList.add('extra-text-right');
                                    reportText.innerHTML = 'Report';
                                    extraTextRightContainerTwo.appendChild(reportText);
                            }

                            if(jsonObject['website']){
                                let extraTextRightContainerThree = document.createElement('a');
                                extraTextRightContainerThree.classList.add('extra-text-right-cont');
                                extraTextRightContainerThree.href = jsonObject["website-link"];
                                extraTextRightContainerThree.target = "_blank";
                                extraRight.appendChild(extraTextRightContainerThree);

                                    let websiteImg = document.createElement('img');
                                    websiteImg.classList.add('report-icon');
                                    websiteImg.src = "icon/web-icon.svg";
                                    extraTextRightContainerThree.appendChild(websiteImg);

                                    let websiteText = document.createElement('p');
                                    websiteText.classList.add('extra-text-right');
                                    websiteText.innerHTML = 'Website';
                                    extraTextRightContainerThree.appendChild(websiteText);
                            }

                let imageContainer = document.createElement('div');
                imageContainer.classList.add('image-container');
                modalImageTitleExtraContainer.appendChild(imageContainer);
                    
                    let imageContainerContainer = document.createElement('div');
                    imageContainerContainer.classList.add('image-container-container');
                    imageContainer.appendChild(imageContainerContainer);

                        let modalImage = document.createElement('img');
                        modalImage.classList.add('image');
                        modalImage.src = jsonObject['img-src'];
                        imageContainerContainer.appendChild(modalImage);

            let modalDescriptionAndInfoContainer = document.createElement('div');
            modalDescriptionAndInfoContainer.classList.add('modal-description-and-info-cont');
            modal.appendChild(modalDescriptionAndInfoContainer);
                
                let description = document.createElement('div');
                description.classList.add('description');
                modalDescriptionAndInfoContainer.appendChild(description);

                    let descriptionTextBox = document.createElement('div');
                    descriptionTextBox.classList.add('description-text-box');
                    description.appendChild(descriptionTextBox);

                        let descriptionHeader = document.createElement('p');
                        descriptionHeader.classList.add('description-header');
                        descriptionHeader.innerHTML = 'Project Overview';
                        descriptionTextBox.appendChild(descriptionHeader);

                        jsonObject['description'].forEach( (paragraph) => {
                            let descriptionText = document.createElement('p');
                            descriptionText.classList.add('description-text');
                            descriptionText.innerHTML = paragraph;
                            descriptionTextBox.appendChild(descriptionText);
                        });

                let info = document.createElement('div');
                info.classList.add('info');
                modalDescriptionAndInfoContainer.appendChild(info);

                    let infoTextContainer = document.createElement('div');
                    infoTextContainer.classList.add('info-text-container');
                    info.appendChild(infoTextContainer);

                        if(jsonObject['info-list-one-toggle']){
                            let infoListHeaderOne = document.createElement('p');
                            infoListHeaderOne.classList.add('info-text-header');
                            infoListHeaderOne.innerHTML = jsonObject['info-list-one-title'];
                            infoTextContainer.appendChild(infoListHeaderOne);

                            let infoListOne = document.createElement('ul');
                            infoListOne.classList.add('info-list');
                            infoTextContainer.appendChild(infoListOne);

                            jsonObject['info-list-one-items'].forEach( (item) =>{
                                let listItem = document.createElement('li');
                                listItem.classList.add('list-item');
                                infoListOne.appendChild(listItem);
                            });
                        }

                        if(jsonObject['info-list-two-toggle']){
                            let infoListHeaderTwo = document.createElement('p');
                            infoListHeaderTwo.classList.add('info-text-header');
                            infoListHeaderTwo.innerHTML = jsonObject['info-list-two-title'];
                            infoTextContainer.appendChild(infoListHeaderTwo);

                            let infoListTwo = document.createElement('ul');
                            infoListTwo.classList.add('info-list');
                            infoTextContainer.appendChild(infoListTwo);

                            jsonObject['info-list-two-items'].forEach( (item) =>{
                                let listItem = document.createElement('li');
                                listItem.classList.add('list-item');
                                infoListTwo.appendChild(listItem);
                            });
                        }
                        
                        if(jsonObject['info-list-three-toggle']){
                            let infoListHeaderThree = document.createElement('p');
                            infoListHeaderThree.classList.add('info-text-header');
                            infoListHeaderThree.innerHTML = jsonObject['info-list-three-title'];
                            infoTextContainer.appendChild(infoListHeaderThree);

                            let infoListThree = document.createElement('ul');
                            infoListThree.classList.add('info-list');
                            infoTextContainer.appendChild(infoListThree);

                            jsonObject['info-list-three-items'].forEach( (item) =>{
                                let listItem = document.createElement('li');
                                listItem.classList.add('list-item');
                                infoListThree.appendChild(listItem);
                            });
                        }
                        
                        const projectsPage = document.getElementById('projects_page');
                        projectsPage.appendChild(modalContainer);

    }

    constructor(contentObject){
        this.constructModal(contentObject);
        this.constructBox(contentObject);


    }

}



export default Project;