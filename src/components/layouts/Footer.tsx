import SocialMediaIcon from "@/components/ui/SocialMediaIcon";
import {Navigation} from "@/config/navigationData";
import {contactDetails} from "@/config/navigationData";

export default function Footer({navigation }: { navigation: Navigation}) {

    return (
        <footer className="bg-white ">

            <div className="space-y-4">
                <div className="pt-4 flex justify-center space-x-10">
                    {navigation.social.map((item) => (
                        <SocialMediaIcon key={item.name} item={item}/>
                    ))}
                </div>

                <div className="pb-4 w-full space-y-2 text-center justify-center">
                    {contactDetails.map((item) => (
                        <p className="text-lg text-gray-600 hover:text-gray-900">
                            {item}
                        </p>
                    ))}
                </div>
            </div>

            <div className="mb-16 bg-gray-200 p-2 ">
            <p className="text-center text-xs leading-5 text-gray-500">
                    &copy; Ignite Life Bowen Therapy
                </p>
            </div>

        </footer>
    )
}
