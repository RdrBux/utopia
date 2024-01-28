'use client'

import { FilePond, registerPlugin } from 'react-filepond'
import FilePondPluginFileValidateType from 'filepond-plugin-file-validate-type'
import FilePondPluginImageExifOrientation from 'filepond-plugin-image-exif-orientation'
import FilePondPluginImagePreview from 'filepond-plugin-image-preview'
import FilePondPluginImageCrop from 'filepond-plugin-image-crop'
import FilePondPluginImageResize from 'filepond-plugin-image-resize'
import FilePondPluginImageTransform from 'filepond-plugin-image-transform'
import FilePondPluginImageEdit from 'filepond-plugin-image-edit'

import 'filepond/dist/filepond.min.css'
import 'filepond-plugin-image-preview/dist/filepond-plugin-image-preview.min.css'

export default function InputImage({ id, label }: { id: string, label: string }) {

	registerPlugin(
		FilePondPluginFileValidateType,
		FilePondPluginImageExifOrientation,
		FilePondPluginImagePreview,
		FilePondPluginImageCrop,
		FilePondPluginImageResize,
		FilePondPluginImageTransform,
		FilePondPluginImageEdit,
	);

	return (
		<div>
			<label className="mb-2 text-sm flex justify-between font-medium cursor-pointer text-gray-900" htmlFor={id}>
				{label} <span className="text-gray-500">(máximo 4.5 MB)</span>
			</label>
			<FilePond
				name="img_url"
				allowImageEdit={true}
				acceptedFileTypes={['image/*']}
				labelIdle='Arrastrar y soltar imagen o <span class="filepond--label-action">Explorar</span>'
				imageResizeTargetWidth={678}
				imageResizeMode='cover'
				imageTransformOutputMimeType={'image/jpeg'}
				storeAsFile={true}
				credits={false}
			/>
		</div>
	)
}